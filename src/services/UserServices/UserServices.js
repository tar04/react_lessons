import axios from 'axios';

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});

const getUsers = () => {
    return axiosInstance.get('/users');
}

export {getUsers};