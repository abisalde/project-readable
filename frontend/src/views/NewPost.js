import React, {Fragment} from 'react';
import {useSelector} from 'react-redux';

// Components
import PostForm from '../components/AddPostForm';
import Layout from '../components/Layout';

const NewPost = () => {
  const categories = useSelector(({categories}) => categories);

  return (
    <Fragment>
      <Layout>
        <PostForm categories={categories} />
      </Layout>
    </Fragment>
  );
};

export default NewPost;
