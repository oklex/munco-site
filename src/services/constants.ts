import axios from 'axios'

const apiEndpoint = 'https://munco.ca/wp-json/wp/v2/'
let API = createAxiosInstance() 

function createAxiosInstance() {
    return axios.create({
        baseURL: apiEndpoint
    })
}

export { apiEndpoint, API}