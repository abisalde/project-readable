import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import Layout from '../components/Layout';
import PostDashboard from '../components/PostDashboard';
import {setSortPosts} from '../redux/actions/sort';

const PostCategory = () => {
  let params = useParams();
  const dispatch = useDispatch();
  const {category} = params;

  const posts = useSelector(({posts}) => posts);
  const sorted = useSelector(({sorted}) => sorted);

  const filteredPost = posts[category];

  // SortPostFunction
  const sortPostsBy = (e) => {
    dispatch(setSortPosts(e.target.value));
  };
  return (
    <Layout>
      <PostDashboard
        posts={filteredPost}
        category={category}
        sortedPost={sorted}
        sortPost={sortPostsBy}
      />
    </Layout>
  );
};

export default PostCategory;
