import { GET_ALL_POSTS } from './types';
import APIServices from '../../services/API';
import { showLoading, hideLoading } from 'react-redux-loading';

const getAllPosts = (posts) => ({
    type: GET_ALL_POSTS,
    payload: posts,
});

export const loadAllPosts = () => async (dispatch) => {
    try {
        await dispatch(showLoading());
        const { data } = await APIServices._getAllPosts();
        await dispatch(getAllPosts(data));
        await dispatch(hideLoading());
    } catch (error) {
        console.log(`Error from loadAllPosts: ${error}`);
    }
};
