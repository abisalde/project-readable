import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {Navigate, Link} from 'react-router-dom';
import {
  Box,
  Card,
  CardContent,
  IconButton,
  ButtonGroup,
  Button,
  Typography,
  CardActions,
  Tooltip,
} from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CreateIcon from '@mui/icons-material/Create';
import {Icon, Image, Muted, Bottom} from './style';

//Actions & Functions
import {formatDate} from '../../utils/functions';
import {handleDeletePost} from '../../redux/actions/posts';
import UpDownVote from '../shared/UpDownVote';

const PostCard = ({post}) => {
  const dispatch = useDispatch();
  const {
    id,
    title,
    author,
    voteScore,
    timestamp,
    commentCount,
    category,
    body,
    postImage,
  } = post;

  const deletePost = (id) => {
    dispatch(handleDeletePost(id));
    return <Navigate to='/' />;
  };

  return (
    <Fragment>
      <Box sx={{width: '100%'}}>
        <Card
          sx={{
            display: 'flex',
            flexDirection: 'row',
            position: 'relative',
            maxWidth: 695,
          }}
        >
          <CardContent sx={{width: '45%'}}>
            <Image
              src={
                postImage
                  ? postImage
                  : 'https://source.unsplash.com/random/400x300'
              }
              alt={title}
            />
          </CardContent>
          <CardContent sx={{width: '55%'}}>
            <Typography
              variant='h3'
              sx={{fontSize: 22, fontWeight: 600, mb: 1}}
            >
              <Link
                to={`/${category}/${id}`}
                className='title_link'
                style={{color: 'black'}}
              >
                {title}
              </Link>
            </Typography>
            <Typography
              variant='body1'
              component='div'
              color='text.secondary'
              sx={{
                display: 'flex',
                alignItems: 'center',
                lineHeight: 1.75,
                justifyContent: 'space-between',
              }}
            >
              <Muted>
                <Muted>
                  <EventOutlinedIcon fontSize='small' sx={{marginRight: 0.7}} />{' '}
                  {formatDate(timestamp)}
                </Muted>
                <Muted>
                  <AccountCircleIcon fontSize='small' sx={{marginRight: 0.7}} />{' '}
                  {author}
                </Muted>
              </Muted>
              <Icon>
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
              </Icon>
            </Typography>
            <ButtonGroup size='small' sx={{mb: 1, mt: 1}}>
              <Link to={`/${category}`}>
                <Button
                  variant='outlined'
                  color='info'
                  sx={{
                    fontSize: '0.752rem',
                    textTransform: 'Capitalize',
                  }}
                >
                  {category}
                </Button>
              </Link>
              <Button
                variant='outlined'
                color='secondary'
                sx={{
                  fontSize: '0.752rem',
                  textTransform: 'Capitalize',
                }}
              >
                Score {voteScore}
              </Button>
            </ButtonGroup>
            <Typography variant='body2' component='p'>
              {body.slice(0, 45)}...
            </Typography>
            <Bottom>
              <Muted>
                {commentCount} {commentCount > 1 ? 'Comments' : 'Comment'}
              </Muted>
              <CardActions>
                <UpDownVote
                  upVote={(test) => console.log('test')}
                  downVote={() => console.log(test)}
                />
              </CardActions>
            </Bottom>
          </CardContent>
        </Card>
      </Box>
    </Fragment>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    voteScore: PropTypes.number.isRequired,
    deleted: PropTypes.bool.isRequired,
    commentCount: PropTypes.number.isRequired,
    postImage: PropTypes.string,
  }).isRequired,
};

export default PostCard;
