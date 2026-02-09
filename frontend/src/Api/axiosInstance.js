import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: "http://localhost:3000/api",
})

axios.interceptors.request.use((config)=>{
    const token = sessionStorage.getItem('token')
console.log(token)
    if (token) {
        config.headers = token
    }
    return config
})

export default axiosInstance