import axios from 'axios';
import baseURL from "../config/urls";

 let axiosService = axios.create({
    baseURL
});

 export default axiosService;