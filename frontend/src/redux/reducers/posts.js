import {
  GET_CATEGORY_POSTS_SUCCESS,
  ADD_POST_SUCCESS,
  DELETE_POST,
  POST_UP_VOTE,
  POST_DOWN_VOTE,
  UPDATE_POST_SUCCESS,
} from '../actions/types';

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
    case UPDATE_POST_SUCCESS:
      const {post: editPost} = action.payload;
      const {category: editCategory} = editPost;
      const editedPost = state[editCategory].map((post) => {
        if (post.id === editPost.id) {
          return editPost;
        }
        return post;
      });
      return {
        ...state,
        [editCategory]: editedPost,
      };
    case POST_UP_VOTE:
    case POST_DOWN_VOTE:
      const {post: postToUpdate} = action.payload;
      const updatedPost = state[postToUpdate.category].map((post) => {
        if (post.id === postToUpdate.id) {
          return postToUpdate;
        }
        return post;
      });
      return {
        ...state,
        [postToUpdate.category]: updatedPost,
      };
    case DELETE_POST:
      const {post: postToDelete} = action.payload;
      const newPosts = state[postToDelete.category].filter(
        (post) => post.id !== postToDelete.id
      );
      return {
        ...state,
        [postToDelete.category]: newPosts,
      };
    default:
      return state;
  }
};

export default PostsReducer;
