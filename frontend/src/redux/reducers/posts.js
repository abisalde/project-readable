import { GET_ALL_POSTS, GET_CATEGORY_POSTS_SUCCESS } from '../actions/types';

const PostsReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_ALL_POSTS:
            return action.payload;
        case GET_CATEGORY_POSTS_SUCCESS:
            const { category, posts } = action.payload;
            return {
                ...state,
                [category]: posts,
            };
        default:
            return state;
    }
};

export default PostsReducer;
