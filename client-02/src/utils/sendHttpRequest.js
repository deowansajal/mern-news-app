import axios from 'axios'
import { localDB } from './localDB'

const token = localDB.getToken()
axios.defaults.baseURL = 'https://f1-blog.herokuapp.com/'
// axios.defaults.baseURL = 'http://localhost:4000/'

axios.defaults.headers.common['Authorization'] = token ? token : null
export const sendHttpRequest = async ({
    method = 'get',
    url,
    body,
    headers = {},
}) => {
    const result = { errors: null, data: null }

    const options = {
        method,
        url,
        headers,
    }

    if (method === 'post' || method === 'put' || method === 'patch') {
        options.data = body
    }

    try {
        const { data } = await axios(options)
        result.data = data
    } catch (errors) {
        if (errors.response) {
            result.errors = errors.response.data
        } else {
            result.errors = {
                message: errors.message,
            }
        }
    }

    return result
}
