import {GET_ALL_CATEGORIES} from '../actions/types';

const CategoriesReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_CATEGORIES:
      const categories = action.payload.categories.map(
        (category) => category.name
      );
      return [...categories];
    default:
      return state;
  }
};

export default CategoriesReducer;
