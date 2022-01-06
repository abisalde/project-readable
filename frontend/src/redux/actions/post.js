import {GET_SINGLE_POST} from './types';
import APIServices from '../../services/API';
import {showLoading, hideLoading} from 'react-redux-loading';

const getPostById = (post) => {
  return {
    type: GET_SINGLE_POST,
    payload: post,
  };
};

export const handleGetPostById = (id) => async (dispatch) => {
  try {
    await dispatch(showLoading());
    const {data} = await APIServices._getPostById(id);
    dispatch(getPostById({post: data}));
    await dispatch(hideLoading());
  } catch (error) {
    console.log(`Error Handle Get Post by ID: ${error}`);
  }
};
