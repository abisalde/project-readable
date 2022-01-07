import React, {Fragment, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

//Actions
import {handleGetPostById} from '../redux/actions/post';

// Components
import Layout from '../components/Layout';
import EditPostForm from '../components/EditPostForm';

const EditPost = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const post = useSelector(({post}) => post);

  useEffect(() => {
    dispatch(handleGetPostById(id));
  }, [dispatch, id]);

  return (
    <Fragment>
      <Layout>
        <EditPostForm post={post} />
      </Layout>
    </Fragment>
  );
};

export default EditPost;
