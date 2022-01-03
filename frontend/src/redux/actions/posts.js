import {GET_CATEGORY_POSTS_SUCCESS, ADD_POST_SUCCESS} from './types';
import APIServices from '../../services/API';
import {showLoading, hideLoading} from 'react-redux-loading';

const handlePostCategory = ({category, posts}) => {
  return {
    type: GET_CATEGORY_POSTS_SUCCESS,
    payload: {
      category,
      posts,
    },
  };
};

export const loadAllPostsCategory = (category) => {
  return async (dispatch) => {
    try {
      await dispatch(showLoading());
      const {data} = await APIServices._getAllPostsByCategory(category);
      await dispatch(handlePostCategory({category, posts: data}));
      await dispatch(hideLoading());
    } catch (error) {
      console.log(`Error from loadAllPostsCategory: ${error}`);
    }
  };
};

const addPost = (post) => {
  return {
    type: ADD_POST_SUCCESS,
    payload: post,
  };
};

export const handleAddPost = (post) => async (dispatch) => {
  try {
    await dispatch(showLoading());
    const {data} = await APIServices._addPost(post);
    await dispatch(addPost(data));
    await dispatch(hideLoading());
  } catch (error) {
    console.log(`Error from handleAddPost: ${error}`);
  }
};
