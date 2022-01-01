import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {loadAllCategories} from './redux/actions/category';
import {LoadingBar} from 'react-redux-loading';
import CategoryTab from './components/CategoryTab';
// import {loadAllPosts} from './redux/actions/posts';
import PostCard from './components/PostCard';
import Layout from './components/Layout';

const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector(({loading}) => loading);

  useEffect(() => {
    dispatch(loadAllCategories());
    // dispatch(loadAllPosts());
  }, [dispatch]);

  if (loading.default === undefined || loading.default === 1) {
    return (
      <div>
        <p>App is Loading</p>
      </div>
    );
  }

  return (
    <div className='App'>
      <LoadingBar />
      <CategoryTab />
      <Layout>
        <PostCard />
      </Layout>
    </div>
  );
};

export default App;
