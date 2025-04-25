import axios from 'axios';

const ApiClient = axios.create({
    //TODO: Change this to the environment variable
    baseURL: 'http://localhost:3004/api/v1/',
    headers: {
        'Content-Type': 'application/json',
    },

});

ApiClient.interceptors.response.use(
    response => response,
    error => {
        return Promise.reject(error);
    }
);

export default ApiClient;