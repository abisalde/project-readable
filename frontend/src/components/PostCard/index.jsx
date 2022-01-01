import React, {Fragment} from 'react';

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

const PostCard = () => {
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
            <Image src='https://source.unsplash.com/random/400x200' />
          </CardContent>
          <CardContent sx={{width: '55%'}}>
            <Typography
              variant='h3'
              sx={{fontSize: 22, fontWeight: 600, mb: 1}}
            >
              Post Title
            </Typography>
            <Typography
              variant='body1'
              component='div'
              color='text.secondary'
              sx={{display: 'flex', alignItems: 'center', lineHeight: 1.75}}
            >
              <Muted>
                <EventOutlinedIcon fontSize='small' />
              </Muted>
              <Muted>
                <AccountCircleIcon fontSize='small' />
              </Muted>
            </Typography>
            <ButtonGroup size='small' sx={{mb: 1, mt: 1}}>
              <Button
                variant='outlined'
                color='info'
                sx={{fontSize: '0.752rem'}}
              >
                react
              </Button>
              <Button
                variant='outlined'
                color='secondary'
                sx={{fontSize: '0.752rem'}}
              >
                Vote
              </Button>
            </ButtonGroup>
            <Typography variant='body2' component='p'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
            <Bottom>
              <Muted>0 Comments</Muted>
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

export default PostCard;
