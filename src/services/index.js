import axios from 'axios';

const baseURL = 'https://api.bukala0pak.com/v2';

const Get = (path) => (data) => {
    const promise = new Promise((resolve, reject)=>{
        axios.get(`${baseURL}/${path}`)
        .then((response)=>{
            resolve(response.data)
        })
        .catch((e)=>{
            reject(e)
        })
    })
    return promise;
}

const getProducts = Get('products.json?keywords=fixie&page=2&per_page=20');

const API = {
    getProducts
}

export default API;