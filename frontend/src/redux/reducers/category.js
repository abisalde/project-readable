import {GET_ALL_CATEGORIES} from '../actions/types';

const CategoriesReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_CATEGORIES:
      const categories = action.payload;
      return categories;
    default:
      return state;
  }
};

export default CategoriesReducer;
