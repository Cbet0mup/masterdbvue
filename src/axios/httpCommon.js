import axios from 'axios'
export const HTTP = axios.create({
    baseURL: '',
    headers: {
        'Content-Type': 'application/json',
        mode: 'cors'
    }
})
