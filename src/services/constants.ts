import axios from 'axios'

const wpApiEndpoint = 'https://munco.xyz/wp-json/wp/v2/'
const eventApiEndpoint = 'https://ancient-ravine-42785.herokuapp.com/'
let wordpressAPI = wpCreateWordpressAxiosInstance() 
let conferenceAPI = eventCreateAxiosInstance()

function wpCreateWordpressAxiosInstance() {
    return axios.create({
        baseURL: wpApiEndpoint
    })
}

function eventCreateAxiosInstance() {
    return axios.create({
        baseURL: eventApiEndpoint
    })
}

export { wpApiEndpoint, wordpressAPI, eventApiEndpoint, conferenceAPI}