import {combineReducers} from 'redux';
import {loadingBarReducer as loadingBar} from 'react-redux-loading';

import categories from './category';
import posts from './posts';
import sorted from './sort';
import post from './post';
import comments from './comments';

export default combineReducers({
  categories,
  comments,
  posts,
  post,
  sorted,
  loadingBar,
});
