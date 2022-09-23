import axios from "axios";

const instance = axios.create({
    baseURL: 'http://188.225.83.80:6719/api/v1'
})

export default instance