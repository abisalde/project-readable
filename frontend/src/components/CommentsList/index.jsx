import React, {Fragment} from 'react';
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import {
  handleDeleteCommentToPost,
  handleDownVoteComment,
  handleEditCommentToPost,
  handleUpVoteComment,
} from '../../redux/actions/comments';
import {ListContainer} from '../shared/styles';
import CommentsCard from '../CommentsCard';

const CommentList = ({comments}) => {
  const dispatch = useDispatch();
  const handleVoteUp = (id) => {
    dispatch(handleUpVoteComment(id));
  };

  const handleVoteDown = (id) => {
    dispatch(handleDownVoteComment(id));
  };

  const handleDeleteComment = (id) => {
    dispatch(handleDeleteCommentToPost(id));
  };

  const handleEditComment = ({id, body}) => {
    dispatch(handleEditCommentToPost({id, body, timestamp: Date.now()}));
  };

  const mappedComments =
    comments &&
    comments.length > 0 &&
    comments.map((comment) => {
      return (
        <CommentsCard
          key={comment.id}
          comment={comment}
          handleVoteUp={handleVoteUp}
          handleVoteDown={handleVoteDown}
          handleDeleteComment={handleDeleteComment}
          handleEditComment={handleEditComment}
        />
      );
    });

  return (
    <Fragment>
      <ListContainer>{mappedComments}</ListContainer>
    </Fragment>
  );
};

CommentList.propTypes = {
  comments: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default CommentList;
