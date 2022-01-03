import React, {Fragment} from 'react';
import {useDispatch, useSelector} from 'react-redux';

// Actions
import {setSortPosts} from '../redux/actions/sort';

// Components
import Layout from '../components/Layout';
import PostDashboard from '../components/PostDashboard';

const App = () => {
  const dispatch = useDispatch();
  const posts = useSelector(({posts}) => posts);
  const sorted = useSelector(({sorted}) => sorted);
  const categories = useSelector(({categories}) => categories);

  // SortPostFunction
  const sortPostsBy = (e) => {
    dispatch(setSortPosts(e.target.value));
  };

  const allPosts = [];
  if (categories.length > 0 && posts) {
    categories.forEach((category) => {
      if (posts[category.name]) {
        allPosts.push(...posts[category.name]);
      }
    });
  }

  return (
    <Fragment>
      <Layout>
        <PostDashboard
          posts={allPosts}
          sortPost={sortPostsBy}
          sortedPost={sorted}
        />
      </Layout>
    </Fragment>
  );
};

export default App;
