import {combineReducers} from 'redux';
import {loadingBarReducer as loading} from 'react-redux-loading';

import categories from './category';
import posts from './posts';
import sorted from './sort';

export default combineReducers({
  categories,
  posts,
  sorted,
  loading,
});
