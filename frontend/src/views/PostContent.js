import React, {Fragment, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';

//Actions
import {handleGetPostById} from '../redux/actions/post';

// Components
import Post from '../components/PostContents';
import CategoryTab from '../components/CategoryTab';
import Layout from '../components/Layout';

const PostContent = () => {
  const {id, category} = useParams();
  const dispatch = useDispatch();
  const post = useSelector(({post}) => post);

  console.log('IDDD:::', id);
  console.log('CATEGORY:::', category);

  useEffect(() => {
    dispatch(handleGetPostById(id));
  }, [dispatch, id]);

  return (
    <Fragment>
      <Layout>
        <CategoryTab />
        <Post post={post} />
      </Layout>
    </Fragment>
  );
};

export default PostContent;
