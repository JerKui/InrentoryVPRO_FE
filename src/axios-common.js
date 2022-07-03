import axios from 'axios';
axios.defaults.withCredentials = true;
// axios.defaults.headers.common['Authorization'] = `Bearer ${JSON.parse(localStorage.getItem('user')).headers.authorization}`; 

export default axios.create({
    baseURL: 'https://inrentorybackend.herokuapp.com/api/v1',
    headers: {
        'Content-type': 'application/json'
    }
});