import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {handleDeleteCommentToPost} from '../../redux/actions/comments';
import {formatDate} from '../../utils/functions';
import {
  ListContainer,
  List,
  ListItem,
  TopItem,
  MiddleItem,
  BottomItem,
  Muted,
} from './styles';
import {Typography, Box, Tooltip, IconButton} from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import UpDownVote from '../shared/UpDownVote';
import CommentsDisplay from '../shared/CommentsDisplay';
import EditCommentDisplay from '../shared/EditCommentDisplay';

const CommentsCard = ({comments}) => {
  const dispatch = useDispatch();
  const [editComment, setEditComment] = useState(false);

  const handleEditCommentShow = () => {
    console.log('I am clicked');
  };

  const handleEditCommentSubmit = (e) => {
    e.preventDefault();
    setEditComment(false);
  };

  const deleteComment = (id) => {
    dispatch(handleDeleteCommentToPost(id));
  };

  return (
    <Fragment>
      <ListContainer>
        {comments &&
          comments.length > 0 &&
          comments.map((comment, index) => {
            return (
              <List key={comment.id}>
                <ListItem key={index}>
                  <TopItem>
                    <Typography
                      variant='h6'
                      component='h6'
                      sx={{fontWeight: 'bold', fontSize: '1rem'}}
                    >
                      {comment?.author}
                    </Typography>
                    <Box
                      component='span'
                      sx={{
                        display: 'inline-block',
                        mx: '6px',
                        transform: 'scale(0.8)',
                      }}
                    >
                      •
                    </Box>
                    <Muted>{formatDate(comment?.timestamp)}</Muted>
                  </TopItem>
                  <Box
                    component='div'
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Typography
                      variant='p'
                      component='p'
                      sx={{
                        marginTop: 2,
                        fontSize: '0.851rem',
                        fontWeight: 'bold',
                        textTransform: 'capitalize',
                        padding: '0.5rem',
                        width: '5rem',
                        textAlign: 'center',
                        height: '2rem',
                        backgroundColor: '#f5f5f5',
                        borderRadius: '0.5rem',
                      }}
                    >
                      Score {comment?.voteScore}
                    </Typography>
                    <Typography component='div'>
                      <Tooltip title='Delete' arrow id='Delete'>
                        <IconButton
                          size='small'
                          onClick={() => deleteComment(comment?.id)}
                        >
                          <DeleteForeverIcon fontSize='small' />
                        </IconButton>
                      </Tooltip>
                    </Typography>
                  </Box>
                  <MiddleItem>
                    {editComment ? (
                      <EditCommentDisplay
                        body={comment?.body}
                        id={comment?.id}
                        hideEditForm={handleEditCommentSubmit}
                      />
                    ) : (
                      <Fragment>
                        <CommentsDisplay
                          body={comment?.body}
                          id={comment?.id}
                        />
                        <Tooltip title='Edit' arrow id='Edit'>
                          <IconButton
                            size='small'
                            onClick={handleEditCommentShow}
                          >
                            <CreateIcon fontSize='small' />
                          </IconButton>
                        </Tooltip>
                      </Fragment>
                    )}
                  </MiddleItem>
                  <BottomItem>
                    <UpDownVote />
                  </BottomItem>
                </ListItem>
              </List>
            );
          })}
      </ListContainer>
    </Fragment>
  );
};

CommentsCard.propTypes = {
  comments: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default CommentsCard;
