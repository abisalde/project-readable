import {GET_SINGLE_POST} from '../actions/types';

const Post = (state = {}, action) => {
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
