import axios from "axios";

axios.interceptors.response.use(
    response => response.data.data,
    error => Promise.reject(error)
)