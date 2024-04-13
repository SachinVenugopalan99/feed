import axios from "axios";

const apiInstance = axios.create({
    baseURL: 'https://rigi-react-assignment-ii-server-production.up.railway.app/api'
})

export default apiInstance;