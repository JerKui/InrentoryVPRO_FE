import axios from 'axios';
axios.defaults.withCredentials = true;
axios.defaults.headers.common['Authorization'] = `Bearer ${JSON.parse(localStorage.getItem('user')).headers.authorization}`; 

export default axios.create({
    baseURL: 'http://localhost:8080/api/v1',
    headers: {
        'Content-type': 'application/json'
    }
});