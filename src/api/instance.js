import axios from 'axios'
export const HTTP = axios.create({
    baseURL: 'http://xn--80aaabrq9ba6exc.xn--h1ahn.xn--p1acf/api',
    headers: {
       post: {
            'Content-Type': 'application/json'
        },
        accept: 'application/json',
        mode: 'cors',
        header: "Access-Control-Allow-Methods: GET, POST, OPTIONS, HEAD"
    },

})
