import {GET_CATEGORY_POSTS_SUCCESS, ADD_POST_SUCCESS} from '../actions/types';

const PostsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_CATEGORY_POSTS_SUCCESS:
      const {category, posts} = action.payload;
      return {
        ...state,
        [category]: posts,
      };
    case ADD_POST_SUCCESS:
      const {post} = action.payload;
      const newPost = state[post.category].concat(post);
      return {
        ...state,
        [post.category]: newPost,
      };
    default:
      return state;
  }
};

export default PostsReducer;
