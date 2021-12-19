import { GET_ALL_CATEGORIES } from '../actions/types';

const CategoriesReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_ALL_CATEGORIES:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};

export default CategoriesReducer;
