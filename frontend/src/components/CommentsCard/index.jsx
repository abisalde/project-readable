import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import {formatDate} from '../../utils/functions';
import {List, ListItem, TopItem, MiddleItem, BottomItem, Muted} from './styles';
import {Typography, Box, Tooltip, IconButton} from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import UpDownVote from '../shared/UpDownVote';
import CommentsDisplay from '../shared/CommentsDisplay';
import EditCommentDisplay from '../shared/EditCommentDisplay';

const CommentsCard = (props) => {
  const {id, author, body, voteScore, timestamp} = props.comment;
  const [editComment, setEditComment] = useState(false);

  const handleEditCommentShow = () => {
    setEditComment(true);
  };

  const handleEditCommentSubmit = (body) => {
    props.handleEditComment({id, body});
    setEditComment(false);
  };

  const deleteComment = (id) => {
    props.handleDeleteComment(id);
  };

  const enableEditingMode = editComment ? (
    <EditCommentDisplay body={body} hideEditForm={handleEditCommentSubmit} />
  ) : (
    <Box
      component='div'
      sx={{display: 'flex', flex: '1 1 auto', flexFlow: 'row'}}
    >
      <CommentsDisplay body={body} id={id} />
      <Tooltip title='Edit' arrow id='Edit'>
        <IconButton
          size='small'
          onClick={handleEditCommentShow}
          sx={{marginLeft: 2}}
        >
          <CreateIcon fontSize='small' />
        </IconButton>
      </Tooltip>
    </Box>
  );

  return (
    <Fragment>
      <List>
        <ListItem>
          <TopItem>
            <Typography
              variant='h6'
              component='h6'
              sx={{fontWeight: 'bold', fontSize: '1rem'}}
            >
              {author}
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
            <Muted>{formatDate(timestamp)}</Muted>
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
                backgroundColor: voteScore >= 10 ? '#00e676' : '#ff1744',
                borderRadius: '0.5rem',
              }}
            >
              Score {voteScore}
            </Typography>
            <Typography component='div'>
              <Tooltip title='Delete' arrow id='Delete'>
                <IconButton size='small' onClick={() => deleteComment(id)}>
                  <DeleteForeverIcon fontSize='small' />
                </IconButton>
              </Tooltip>
            </Typography>
          </Box>
          <MiddleItem>{enableEditingMode}</MiddleItem>
          <BottomItem>
            <UpDownVote
              upVote={() => props.handleVoteUp(id)}
              downVote={() => props.handleVoteDown(id)}
            />
          </BottomItem>
        </ListItem>
      </List>
    </Fragment>
  );
};

CommentsCard.propTypes = {
  props: PropTypes.shape({
    comment: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
      .isRequired,
    handleDeleteComment: PropTypes.func.isRequired,
    handleEditComment: PropTypes.func.isRequired,
    handleVoteUp: PropTypes.func.isRequired,
    handleVoteDown: PropTypes.func.isRequired,
  }),
};

export default CommentsCard;
