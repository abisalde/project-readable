import React, {Fragment, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

// Actions
import {loadAllCategories} from './redux/actions/category';
import {LoadingBar} from 'react-redux-loading';
import {loadAllPosts} from './redux/actions/posts';
import {setSortPosts} from './redux/actions/sort';

// Components
import Layout from './components/Layout';
import PostDashboard from './components/PostDashboard';

const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector(({loading}) => loading);
  const posts = useSelector(({posts}) => posts);
  const sorted = useSelector(({sorted}) => sorted);
  const allPosts = posts.allPost;

  useEffect(() => {
    dispatch(loadAllCategories());
    dispatch(loadAllPosts());
  }, [dispatch]);

  if (loading.default === undefined || loading.default === 1) {
    return (
      <div>
        <LoadingBar />
      </div>
    );
  }

  // SortPostFunction
  const sortPostsBy = (e) => {
    dispatch(setSortPosts(e.target.value));
  };

  return (
    <Fragment>
      <LoadingBar />
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
