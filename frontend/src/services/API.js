import Axios from 'axios';

const apiConfig = {
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.TOKEN}`,
  },
  validateStatus: function (status) {
    return status < 500; // Reject only if the status code is greater than or equal to 500
  },
};

const $http = Axios.create({...apiConfig});

class APIServices {
  async _getAllCategories(data) {
    return await $http.get(`/api/v1/categories`, data);
  }

  async _getAllPosts(data) {
    return await $http.get(`/api/v1/posts`, data);
  }

  async _getAllPostsByCategory(category, data) {
    return await $http.get(`/api/v1/${category}/posts`, data);
  }

  async _addPost(data) {
    return await $http.post(`/api/v1/posts`, data);
  }

  async _getPostById(id, data) {
    return await $http.get(`/api/v1/posts/${id}`, data);
  }

  async _deletePostById(id, data) {
    return await $http.delete(`/api/v1/posts/${id}`, data);
  }

  async _updatePostById(id, data) {
    return await $http.put(`/api/v1/posts/${id}`, data);
  }

  async _getAllCommentsByPostId(id, data) {
    return await $http.get(`/api/v1/posts/${id}/comments`, data);
  }

  async _addCommentToPostId(data) {
    return await $http.post(`/api/v1/comments`, data);
  }

  async _deleteCommentToPostById(id, data) {
    return await $http.delete(`/api/v1/comments/${id}`, data);
  }
}

const instance = new APIServices();

export default instance;
