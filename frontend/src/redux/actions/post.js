import {GET_SINGLE_POST} from './types';
import APIServices from '../../services/API';

const getPostById = (post) => {
  return {
    type: GET_SINGLE_POST,
    payload: post,
  };
};

export const handleGetPostById = (id) => async (dispatch) => {
  try {
    const {data} = await APIServices._getPostById(id);
    dispatch(getPostById({post: data}));
  } catch (error) {
    console.log(`Error Handle Get Post by ID: ${error}`);
  }
};
