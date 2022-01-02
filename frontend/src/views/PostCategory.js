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
  console.log('posts', posts.allPost);

  const sorting = Object.keys(posts?.allPost);
  const filtered = sorting?.filter(
    (key) =>
      posts?.allPost[key]?.category === category &&
      !posts?.allPost[key]?.deleted
  );
  const postsFiltered = filtered?.map((key) => posts?.allPost[key]);

  // SortPostFunction
  const sortPostsBy = (e) => {
    dispatch(setSortPosts(e.target.value));
  };
  return (
    <Layout>
      <PostDashboard
        posts={postsFiltered}
        category={category}
        sortedPost={sorted}
        sortPost={sortPostsBy}
      />
    </Layout>
  );
};

export default PostCategory;
