import React, {Fragment, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {Navigate} from 'react-router-dom';

// Action & Functions
import {handleDeletePost} from '../../redux/actions/posts';
import {formatDate} from '../../utils/functions';

// Components
import {Typography, IconButton, Tooltip, Divider} from '@mui/material';
import ChatBubbleTwoToneIcon from '@mui/icons-material/ChatBubbleTwoTone';
import CreateIcon from '@mui/icons-material/Create';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import UpDownVote from '../shared/UpDownVote';
import {
  DivideRight,
  DivideLeft,
  ListDivide,
  ImageContainer,
  Muted,
  Image,
} from './styles';

const PostContent = ({post, commentCount}) => {
  const {id, body, postImage, timestamp, title, voteScore, author, category} =
    post;

  const dispatch = useDispatch();
  const [redirect, setRedirect] = useState(false);
  const ref = useRef();

  // Scroll to Comment
  const commentClick = () => {
    ref.current.scrollIntoView({
      behavior: 'smooth',
    });
  };

  // Delete Post
  const deletePost = (id) => {
    dispatch(handleDeletePost(id));
    setRedirect(true);
  };

  if (redirect === true) {
    return <Navigate to='/' />;
  }

  return (
    <Fragment>
      <Typography
        variant='h4'
        gutterBottom
        color='text.primary'
        sx={{fontSize: 30, fontWeight: 'bold', lineHeight: 1.5}}
      >
        {title}
      </Typography>
      <ListDivide>
        <DivideRight>
          <Tooltip title='Delete' arrow id='Delete'>
            <IconButton size='small' onClick={() => deletePost(id)}>
              <DeleteForeverIcon fontSize='small' />
            </IconButton>
          </Tooltip>
          <Tooltip title='Edit' arrow id='Edit'>
            <IconButton size='small'>
              <CreateIcon fontSize='small' />
            </IconButton>
          </Tooltip>
          <Typography
            variant='p'
            component='p'
            sx={{
              marginLeft: 1,
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
            Score {voteScore}
          </Typography>
        </DivideRight>
        <DivideLeft>
          <Tooltip title='comment' arrow sx={{marginRight: 1}}>
            <IconButton onClick={commentClick}>
              {commentCount && commentCount}
              <ChatBubbleTwoToneIcon />
            </IconButton>
          </Tooltip>
          <UpDownVote />
        </DivideLeft>
      </ListDivide>
      <ImageContainer>
        <Typography
          component='div'
          variant='body1'
          color='text.secondary'
          sx={{display: 'flex', alignItems: 'center', mb: 2}}
        >
          <Muted>
            <EventOutlinedIcon fontSize='small' sx={{marginRight: 0.7}} />{' '}
            {formatDate(timestamp)}
          </Muted>
          <Muted>
            <AccountCircleIcon fontSize='small' sx={{marginRight: 0.7}} />{' '}
            {author}
          </Muted>
        </Typography>
        <Image
          src={
            postImage ? postImage : 'https://source.unsplash.com/random/400x300'
          }
          alt={category}
        />
      </ImageContainer>
      <Typography
        component='div'
        variant='body2'
        color='text.primary'
        sx={{lineHeight: 1.75, marginTop: 5}}
      >
        <Typography
          component='p'
          variant='body2'
          color='text.primary'
          sx={{
            textJustify: 'inter-word',
            textAlign: 'justify',
            lineHeight: 1.75,
            fontSize: '1rem',
          }}
        >
          {body}
        </Typography>
      </Typography>
      <Typography
        component='div'
        variant='body3'
        color='text.primary'
        sx={{lineHeight: 1.75, marginTop: 5, width: '100%'}}
      >
        <Typography
          component='h5'
          variant='h5'
          color='text.primary'
          sx={{
            borderBottom: '0.25rem solid black',
            fontSize: '1.25rem',
            fontWeight: 'bold',
          }}
        >
          Comments
        </Typography>
        <Typography
          component='p'
          variant='p'
          sx={{fontSize: '0.85rem', fontWeight: 'bold', marginTop: 2}}
        >
          {commentCount && commentCount}{' '}
          {commentCount > 1 ? '  Comments' : '  Comment'}
        </Typography>
      </Typography>
      <Divider ref={ref} />
    </Fragment>
  );
};

PostContent.propTypes = {
  post: PropTypes.object.isRequired,
};

export default PostContent;
