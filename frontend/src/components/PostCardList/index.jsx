import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import PostCard from '../PostCard';
import {ListContainer, List} from './styles';

const PostCardList = ({posts}) => {
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
