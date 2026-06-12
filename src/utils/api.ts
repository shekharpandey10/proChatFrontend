import axios from 'axios'
import useAuthStore from '../store/authstore'

const baseurl = import.meta.env.VITE_BASE_URL;
const api = axios.create({
    baseURL: baseurl,
    withCredentials: true
})

api.interceptors.request.use(
    (config) => {
        const token = useAuthStore.getState().accessToken;

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config
    }
)

export default api