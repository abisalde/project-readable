import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import PostCard from '../PostCard';
import {Card, Box, CardContent} from '@mui/material';
import {ListContainer, List, Image} from './styles';

const PostCardList = ({posts}) => {
  if (posts && posts.length < 1) {
    return (
      <Fragment>
        <ListContainer>
          <List>
            <Box sx={{width: '100%'}}>
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  position: 'relative',
                  maxWidth: 695,
                }}
              >
                <CardContent>
                  <Image
                    src='https://i.ytimg.com/vi/oBhbgIESRI4/maxresdefault.jpg'
                    alt='no posts'
                  />
                </CardContent>
              </Card>
            </Box>
          </List>
        </ListContainer>
      </Fragment>
    );
  }
  return (
    <Fragment>
      <ListContainer>
        {posts &&
          posts.map((post) => {
            return (
              <List key={post.id}>
                <PostCard post={post} />
              </List>
            );
          })}
      </ListContainer>
    </Fragment>
  );
};
PostCardList.propTypes = {
  posts: PropTypes.array,
};

export default PostCardList;
