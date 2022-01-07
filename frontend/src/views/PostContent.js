import React, {Fragment, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import LoadingBar from 'react-redux-loading';

//Actions
import {handleGetPostById} from '../redux/actions/post';
import {handleGetAllComments} from '../redux/actions/comments';

// Components
import Post from '../components/PostContents';
import CategoryTab from '../components/CategoryTab';
import Layout from '../components/Layout';
import CommentsBoxForm from '../components/CommentsBoxForm';
import CommentsList from '../components/CommentsList';

// styles
import {Container, CommentsContainer} from '../components/shared/styles';

const PostContent = () => {
  const {id, category} = useParams();
  const dispatch = useDispatch();
  const post = useSelector(({post}) => post);
  const comments = useSelector(({comments}) => comments);

  // Get Post by ID and Comments by Post ID
  useEffect(() => {
    dispatch(handleGetPostById(id));
    dispatch(handleGetAllComments(id));
  }, [dispatch, id]);

  return (
    <Fragment>
      <Layout>
        <CategoryTab />
        <Container>
          <LoadingBar scope='sectionBar' />
          <Post post={post} />
          <CommentsContainer>
            <CommentsBoxForm parentId={id} category={category} />
            <CommentsList comments={comments} />
          </CommentsContainer>
        </Container>
      </Layout>
    </Fragment>
  );
};

export default PostContent;
