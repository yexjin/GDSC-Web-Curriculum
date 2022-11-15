import { combineReducers } from 'redux';
import counter from './counter';
import anotherModule from './anotherModule';

const rootReducer = combineReducers({
  counter,
  anotherModule
});

export default rootReducer;