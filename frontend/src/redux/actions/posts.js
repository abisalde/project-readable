import {
  GET_ALL_POSTS,
  GET_CATEGORY_POSTS_SUCCESS,
  // GET_CATEGORY_POSTS,
} from './types';
import APIServices from '../../services/API';
import {showLoading, hideLoading} from 'react-redux-loading';

const getAllPosts = (posts) => ({
  type: GET_ALL_POSTS,
  payload: posts,
});

export const loadAllPosts = () => async (dispatch) => {
  try {
    await dispatch(showLoading());
    const {data} = await APIServices._getAllPosts();
    await dispatch(getAllPosts(data));
    await dispatch(hideLoading());
  } catch (error) {
    console.log(`Error from loadAllPosts: ${error}`);
  }
};

// export const fetchPostCategory = (category) => {
//   return {
//     type: GET_CATEGORY_POSTS,
//     payload: category,
//   };
// };

const handlePostCategory = ({category, posts}) => {
  return {
    type: GET_CATEGORY_POSTS_SUCCESS,
    payload: {
      category,
      posts,
    },
  };
};

export const loadAllPostsCategory = (category) => {
  return async (dispatch) => {
    try {
      const {data} = await APIServices._getAllPostsByCategory(category);
      await dispatch(handlePostCategory({category, posts: data}));
    } catch (error) {
      console.log(`Error from loadAllPostsCategory: ${error}`);
    }
  };
};
