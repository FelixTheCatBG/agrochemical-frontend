import axios from 'axios';
import { authenticationService } from '../services';
const baseUrl = 'https://localhost:44359';

var axiosInstance = axios.create({
    baseURL: baseUrl,
    withCredentials: false
});

axiosInstance.interceptors.request.use(config => {
    const currentUser = authenticationService.currentUserValue;

    if (currentUser) {
        config.headers.authorization = `Bearer ${currentUser.token}`;
    }

    return config;
}, error => Promise.reject(error));

axiosInstance.defaults.headers.common['Cache-Control'] = 'no-cache';
axiosInstance.defaults.headers.common.Pragma = 'no-cache';

export default axiosInstance;
