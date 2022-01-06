import {ADD_COMMENT, DELETE_COMMENT, GET_ALL_COMMENTS} from '../actions/types';

const Comments = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_COMMENTS:
      const {comments} = action.payload;
      return comments;
    case ADD_COMMENT:
      const {comments: newComment} = action.payload;
      return [...state, newComment];
    case DELETE_COMMENT:
      const {comments: deletedComment} = action.payload;
      return state.filter((comment) => comment.id !== deletedComment.id);
    default:
      return state;
  }
};

export default Comments;
