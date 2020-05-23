import axios from 'axios'

const API = 'Paste NGROK URL here'

export default axios.create({
    baseURL: `${API}`,
});
