import {
  GET_CATEGORY_POSTS_SUCCESS,
  ADD_POST_SUCCESS,
  DELETE_POST,
  UPDATE_POST_SUCCESS,
  POST_UP_VOTE,
  POST_DOWN_VOTE,
} from './types';
import APIServices from '../../services/API';
import {showLoading, hideLoading} from 'react-redux-loading';
import {handleGetPostById} from './post';

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
    await dispatch(addPost({post: data}));
    await dispatch(hideLoading());
  } catch (error) {
    console.log(`Error from handleAddPost: ${error}`);
  }
};

const postUpVote = (post) => {
  return {
    type: POST_UP_VOTE,
    payload: post,
  };
};

export const handlePostUpVote = (id) => async (dispatch) => {
  try {
    await dispatch(showLoading());
    const body = {option: 'upVote'};
    const {data} = await APIServices._postUpVote(id, body);
    await dispatch(postUpVote({post: data}));
    await dispatch(handleGetPostById(id));
    await dispatch(hideLoading());
  } catch (error) {
    console.log(`Error from handlePostUpVote: ${error}`);
  }
};

const postDownVote = (post) => {
  return {
    type: POST_DOWN_VOTE,
    payload: post,
  };
};

export const handlePostDownVote = (id) => async (dispatch) => {
  try {
    await dispatch(showLoading());
    const body = {option: 'downVote'};
    const {data} = await APIServices._postDownVote(id, body);
    await dispatch(postDownVote({post: data}));
    await dispatch(handleGetPostById(id));
    await dispatch(hideLoading());
  } catch (error) {
    console.log(`Error from handlePostDownVote: ${error}`);
  }
};

const updatePost = (post) => {
  return {
    type: UPDATE_POST_SUCCESS,
    payload: post,
  };
};

export const handleUpdatePost = (post) => async (dispatch) => {
  try {
    await dispatch(showLoading());
    const {data} = await APIServices._updatePostById(post.id, post);
    await dispatch(updatePost({post: data}));
    await dispatch(hideLoading());
  } catch (error) {
    console.log(`Error from handleUpdatePost: ${error}`);
  }
};

const deletePost = (post) => {
  return {
    type: DELETE_POST,
    payload: post,
  };
};

export const handleDeletePost = (id) => async (dispatch) => {
  try {
    await dispatch(showLoading());
    const {data} = await APIServices._deletePostById(id);
    await dispatch(deletePost({post: data}));
    await dispatch(hideLoading());
  } catch (error) {
    console.log(`Error from handleDeletePost: ${error}`);
  }
};
