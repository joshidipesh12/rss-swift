import * as actions from "../api";
import axios from "axios";

const api =
  ({ dispatch }) =>
  next =>
  async action => {
    if (action.type !== actions.apiCallRequested.type) return next(action);

    const {
      url,
      method,
      headers,
      data,
      params,
      onStart,
      onSuccess,
      onError,
      successCallback,
    } = action.payload;

    if (onStart) dispatch({ type: onStart });

    next(action);

    try {
      let response = await axios.request({
        // baseURL: customUrl ?? '',
        url,
        headers,
        method,
        params,
        data,
      });

      // General
      dispatch(actions.apiCallSuccess(response.data));

      // Specific
      if (onSuccess) {
        dispatch({
          type: onSuccess,
          payload: {
            response: response.data,
            params: data,
            successCallback,
          },
        });
      }
    } catch (error) {
      console.log(
        `\n[URL: ${url}]\n[Message: ${error.message}]\n[Code: ${JSON.stringify(
          error.response?.data?.message,
        )}]`,
      );

      // General
      dispatch(actions.apiCallFailed(error));

      // Specific
      if (onError) {
        dispatch({
          type: onError,
          payload: {
            error: error.message,
            status: error.response?.status,
            response: error.response?.data,
          },
        });
      }
    }
  };

export default api;
