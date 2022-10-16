import {combineReducers} from 'redux';
import dummy_reducer from './dummy';

const reducers = combineReducers({
  dummy: dummy_reducer,
});

export default reducers;
