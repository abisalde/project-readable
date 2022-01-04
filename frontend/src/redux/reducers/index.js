import {combineReducers} from 'redux';
import {loadingBarReducer as loading} from 'react-redux-loading';

import categories from './category';
import posts from './posts';
import sorted from './sort';
import post from './post';

export default combineReducers({
  categories,
  posts,
  post,
  sorted,
  loading,
});
