import { SORT_POSTS } from '../actions/types';

const SortReducer = (state = 'date', action) => {
    switch (action.type) {
        case SORT_POSTS:
            if (action.order !== 'date' && action.order !== 'score') {
                return state;
            }
            return action.order;
        default:
            return state;
    }
};

export default SortReducer;
