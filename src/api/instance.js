import axios from 'axios'
export const HTTP = axios.create({
    baseURL: 'http://62.109.8.21/api',
    headers: {
        //post: {
         //   'Content-Type': 'application/json'
      //  },
        accept: 'application/json',
        mode: 'no-cors',
        //header: "Access-Control-Allow-Methods: GET, POST, OPTIONS, HEAD"
    },

})
