import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Card,
  CardContent,
  IconButton,
  ButtonGroup,
  Button,
  Typography,
  CardActions,
} from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import {Icon, Image, Muted, Bottom} from './style';

//Actions & Functions
import {formatDate} from '../../utils/functions';

const PostCard = ({post}) => {
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
          <Icon>
            <DeleteForeverIcon fontSize='small' />
          </Icon>
          <CardContent sx={{width: '45%'}}>
            <Image
              src={
                postImage !== null
                  ? postImage
                  : 'https://source.unsplash.com/random/400x200'
              }
              alt={title}
            />
          </CardContent>
          <CardContent sx={{width: '55%'}}>
            <Typography
              variant='h3'
              sx={{fontSize: 22, fontWeight: 600, mb: 1}}
            >
              {title}
            </Typography>
            <Typography
              variant='body1'
              component='div'
              color='text.secondary'
              sx={{display: 'flex', alignItems: 'center', lineHeight: 1.75}}
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
            <ButtonGroup size='small' sx={{mb: 1, mt: 1}}>
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
                <IconButton color='primary' size='small'>
                  <ThumbUpAltOutlinedIcon color='success' fontSize='small' />
                </IconButton>
                <IconButton color='primary' size='small'>
                  <ThumbDownAltOutlinedIcon color='warning' fontSize='small' />
                </IconButton>
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
