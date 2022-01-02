import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

// Components
import CategoryTab from '../CategoryTab';
import SortPost from '../SortPost';
import PostCardList from '../PostCardList';

// Styles and Icons
import {Container, NewPost} from './style';
import {Button} from '@mui/material';
import FiberNewIcon from '@mui/icons-material/FiberNew';

// Utility Function
import {handleSortedPosts} from '../../utils/functions';

const PostDashboard = ({posts, sortPost, sortedPost, category}) => {
  return (
    <Fragment>
      <Container>
        <CategoryTab category={category} />
        <NewPost>
          <Button
            variant='contained'
            startIcon={<FiberNewIcon />}
            sx={{
              backgroundColor: 'rgb(74, 67, 92)',
              cursor: 'pointer',
            }}
          >
            Post
          </Button>
        </NewPost>
        <SortPost sorted={sortedPost} postSortHandler={sortPost} />
        <PostCardList posts={handleSortedPosts(posts, sortedPost)} />
      </Container>
    </Fragment>
  );
};
PostDashboard.propTypes = {
  posts: PropTypes.array,
  sortPost: PropTypes.func,
  sortedPost: PropTypes.oneOf(['date', 'score']),
  category: PropTypes.string,
};

export default PostDashboard;
