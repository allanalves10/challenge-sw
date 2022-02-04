import axios from 'axios';

const Api = axios.create({
    baseURL: 'https://swapi.dev/api',
    timeout: 50000,
})

export default Api;