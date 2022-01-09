import {GET_SINGLE_POST} from '../actions/types';

const initialState = {
  id: null,
  timestamp: '',
  title: '',
  body: '',
  category: '',
  author: '',
};

const Post = (state = initialState, action) => {
  switch (action.type) {
    case GET_SINGLE_POST:
      const {post} = action.payload;
      return {
        ...post,
      };
    default:
      return state;
  }
};

export default Post;
