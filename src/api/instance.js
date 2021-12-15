import axios from 'axios'
export const HTTP = axios.create({
    baseURL: 'http://xn--80aaabrq9ba6exc.xn--h1ahn.xn--p1acf/api',
    //baseURL: 'http://localhost:8080/api',
    headers: {
       post: {
            'Content-Type': 'application/json'
        },
        'Access-Control-Allow-Origin': 'http://xn--80aaabrq9ba6exc.xn--h1ahn.xn--p1acf/api',
        accept: 'application/json',
        mode: 'cors',
        xsrfHeaderName: 'X-XSRF-TOKEN',
        xsrfCookieName: 'XSRF-TOKEN', // default

    },

})
