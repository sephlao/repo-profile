 import { combineReducers } from 'redux';
 import { routerReducer } from 'react-router-redux';
 import search from './searchReducer';
 import ajaxCallsInProgress from './ajaxStatusReducer';

 const rootReducer = combineReducers({
   routing: routerReducer,
   search,
   ajaxCallsInProgress
 });
 
 export default rootReducer;