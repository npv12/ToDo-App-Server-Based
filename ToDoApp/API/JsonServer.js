import axios from 'axios'

const API = 'http://3de8e9eb.ngrok.io'

export default axios.create({
    baseURL: `${API}`,
});