import axios from 'axios'
import urls from '../urls'

export const getPosts = async () => axios.get(`${urls.common}/post`)
