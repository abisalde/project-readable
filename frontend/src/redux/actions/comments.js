import {
  ADD_COMMENT,
  GET_ALL_COMMENTS,
  DELETE_COMMENT,
  EDIT_COMMENT,
  COMMENT_UP_VOTE,
  COMMENT_DOWN_VOTE,
} from './types';
import APIServices from '../../services/API';
import {showLoading, hideLoading} from 'react-redux-loading';
import {handleGetPostById} from './post';

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
    const parentId = data.parentId;
    dispatch(handleGetPostById(parentId));
    dispatch(addCommentToPost({comments: data}));
    dispatch(hideLoading());
  } catch (error) {
    console.log(`Error from HandleAddCommentToPost: ${error}`);
  }
};

const editCommentToPost = (comments) => {
  return {
    type: EDIT_COMMENT,
    payload: comments,
  };
};

export const handleEditCommentToPost = (comment) => async (dispatch) => {
  try {
    dispatch(showLoading());
    const {data} = await APIServices._updateCommentToPostById(
      comment.id,
      comment
    );
    let parentId = data.parentId;
    dispatch(handleGetPostById(parentId));
    dispatch(editCommentToPost({comments: data}));
    dispatch(hideLoading());
  } catch (error) {
    console.log(`Error from HandleEditCommentToPost: ${error}`);
  }
};

const upVoteComment = (comments) => {
  return {
    type: COMMENT_UP_VOTE,
    payload: comments,
  };
};

export const handleUpVoteComment = (id) => async (dispatch) => {
  try {
    dispatch(showLoading());
    const body = {option: 'upVote'};
    const {data} = await APIServices._postCommentUpVote(id, body);
    dispatch(upVoteComment({comments: data}));
    dispatch(hideLoading());
  } catch (error) {
    console.log(`Error from HandleUpVoteComment: ${error}`);
  }
};

const downVoteComment = (comments) => {
  return {
    type: COMMENT_DOWN_VOTE,
    payload: comments,
  };
};

export const handleDownVoteComment = (id) => async (dispatch) => {
  try {
    dispatch(showLoading());
    const body = {option: 'downVote'};
    const {data} = await APIServices._postCommentDownVote(id, body);
    dispatch(downVoteComment({comments: data}));
    dispatch(hideLoading());
  } catch (error) {
    console.log(`Error from HandleDownVoteComment: ${error}`);
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
    let parentId = data.parentId;
    dispatch(handleGetPostById(parentId));
    dispatch(deleteCommentToPost({comments: data}));
  } catch (error) {
    console.log(`Error from HandleDeleteCommentToPost: ${error}`);
  }
};
