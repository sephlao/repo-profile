 import { combineReducers } from 'redux';
 import { routerReducer } from 'react-router-redux';
 import profile from './profileReducer';
 import trending from './trendingReducer';
 import ajaxCallsInProgress from './ajaxStatusReducer';

 const rootReducer = combineReducers({
   routing: routerReducer,
   profile,
   trending,
   ajaxCallsInProgress
 });
 
 export default rootReducer;