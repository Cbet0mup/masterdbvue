import axios from 'axios'
export const HTTP = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        post: {
            'Content-Type': 'application/json'
        },
        accept: 'application/json',
        mode: 'cors',
        header1: "Access-Control-Allow-Methods: GET, POST, OPTIONS, HEAD"
    },

})
