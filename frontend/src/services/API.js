import Axios from 'axios';

const apiConfig = {
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        Authorization: 'abisalde',
    },
    validateStatus: function (status) {
        return status < 500; // Reject only if the status code is greater than or equal to 500
    },
};

const $http = Axios.create({ ...apiConfig });

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
}

const instance = new APIServices();

export default instance;
