import { combineReducers } from 'redux';
import sample from './sample';
import post from './post';

const reducers = combineReducers({
  sample,
  post,
});

export default reducers;
