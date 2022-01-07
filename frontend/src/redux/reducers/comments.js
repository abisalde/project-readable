import {
  ADD_COMMENT,
  COMMENT_DOWN_VOTE,
  COMMENT_UP_VOTE,
  DELETE_COMMENT,
  EDIT_COMMENT,
  GET_ALL_COMMENTS,
} from '../actions/types';

const Comments = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_COMMENTS:
      const {comments} = action.payload;
      return comments;
    case ADD_COMMENT:
      const {comments: newComment} = action.payload;
      return [...state, newComment];
    case EDIT_COMMENT:
    case COMMENT_DOWN_VOTE:
    case COMMENT_UP_VOTE:
      const {comments: editedComment} = action.payload;
      return state.map((comment) => {
        if (comment.id === editedComment.id) {
          return editedComment;
        }
        return comment;
      });
    case DELETE_COMMENT:
      const {comments: deletedComment} = action.payload;
      return state.filter((comment) => comment.id !== deletedComment.id);
    default:
      return state;
  }
};

export default Comments;
