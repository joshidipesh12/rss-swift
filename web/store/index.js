import {configureStore, applyMiddleware} from '@reduxjs/toolkit';
import reducers from './slices';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

const rootReducer = (state, action) => {
  /* reducer middleware */
  // if (action.type === logout.type) {
  //   persistConfig.storage.removeItem('persist:root');
  //   state = undefined;
  // }
  return reducers(state, action);
};

const middleware = [thunk];

// Global store
const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: composeWithDevTools(applyMiddleware(...middleware)),
});

export default store;
