import { SORT_POSTS } from './types';

export const setSortPosts = (order) => {
    return {
        type: SORT_POSTS,
        order,
    };
};
