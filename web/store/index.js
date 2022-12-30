import { configureStore } from "@reduxjs/toolkit";
import reducers from "./slices";
import api from "./middleware/api";

const rootReducer = (state, action) => {
  /* reducer middleware */
  // if (action.type === logout.type) {
  //   persistConfig.storage.removeItem('persist:root');
  //   state = undefined;
  // }
  return reducers(state, action);
};

// Global store
const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(api),
});

export default store;
