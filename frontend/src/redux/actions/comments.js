import {ADD_COMMENT, GET_ALL_COMMENTS, DELETE_COMMENT} from './types';
import APIServices from '../../services/API';
import {showLoading, hideLoading} from 'react-redux-loading';

const getAllComments = (comments) => {
  return {
    type: GET_ALL_COMMENTS,
    payload: comments,
  };
};

export const handleGetAllComments = (id) => async (dispatch) => {
  try {
    const {data} = await APIServices._getAllCommentsByPostId(id);
    dispatch(getAllComments({comments: data}));
  } catch (error) {
    console.log(`Error from HandleGetAllComments: ${error}`);
  }
};

const addCommentToPost = (comments) => {
  return {
    type: ADD_COMMENT,
    payload: comments,
  };
};

export const handleAddCommentToPost = (comment) => async (dispatch) => {
  try {
    dispatch(showLoading());
    const {data} = await APIServices._addCommentToPostId(comment);
    dispatch(addCommentToPost({comments: data}));
    dispatch(hideLoading());
  } catch (error) {
    console.log(`Error from HandleAddCommentToPost: ${error}`);
  }
};

const deleteCommentToPost = (comments) => {
  return {
    type: DELETE_COMMENT,
    payload: comments,
  };
};

export const handleDeleteCommentToPost = (id) => async (dispatch) => {
  try {
    const {data} = await APIServices._deleteCommentToPostById(id);
    dispatch(deleteCommentToPost({comments: data}));
  } catch (error) {
    console.log(`Error from HandleDeleteCommentToPost: ${error}`);
  }
};
