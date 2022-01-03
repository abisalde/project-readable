import {GET_ALL_CATEGORIES} from './types';
import APIServices from '../../services/API';
import {showLoading, hideLoading} from 'react-redux-loading';

const getAllCategory = (categories) => ({
  type: GET_ALL_CATEGORIES,
  payload: categories,
});

export const loadAllCategories = () => async (dispatch) => {
  try {
    await dispatch(showLoading());
    const {data} = await APIServices._getAllCategories();
    await dispatch(getAllCategory(data.categories));
    await dispatch(hideLoading());
  } catch (error) {
    console.log(`Error from loadAllCategories: ${error}`);
  }
};
