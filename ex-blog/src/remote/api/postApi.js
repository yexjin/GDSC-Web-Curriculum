import axios from 'axios'
import urls from '../urls'

export const getPosts = async () => {
    const response = axios.get(`${urls.common}/post`)
    return response
}
