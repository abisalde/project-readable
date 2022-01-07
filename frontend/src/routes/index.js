import React, {Fragment, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import LoadingBar from 'react-redux-loading';

// Actions
import {loadAllCategories} from '../redux/actions/category';
import {loadAllPostsCategory} from '../redux/actions/posts';

// Components
import App from '../views/App';
import TopNav from '../components/TopNav';
import PostCategory from '../views/PostCategory';
import NewPost from '../views/NewPost';
import PageNotFound from '../views/404';
import PostContent from '../views/PostContent';
import EditPost from '../views/EditPost';

const Navigation = () => {
  const dispatch = useDispatch();
  const categories = useSelector(({categories}) => categories);

  useEffect(() => {
    dispatch(loadAllCategories());
  }, [dispatch]);

  useEffect(() => {
    if (categories && categories?.length > 0) {
      categories &&
        categories.map((category) => {
          return dispatch(loadAllPostsCategory(category.name));
        });
    }
  }, [dispatch, categories]);

  return (
    <Fragment>
      <Router basename='/'>
        <LoadingBar />
        <TopNav title='Readable Blog' />
        <Routes>
          <Route path='/' element={<App />} />
          <Route path=':category' element={<PostCategory />} />
          <Route path='new' element={<NewPost />} />
          <Route path=':category/:id' element={<PostContent />} />
          <Route path=':category/:id/edit' element={<EditPost />} />
          <Route path='*' element={<PageNotFound />} />
          <Route path='api/*' element={<PageNotFound />} />
        </Routes>
      </Router>
    </Fragment>
  );
};

export default Navigation;
