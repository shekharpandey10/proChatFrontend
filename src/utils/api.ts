import axios from 'axios'
import useAuthStore from '../store/authstore'

declare const process: {
    env: {
        BASE_URL?: string
    }
}

const baseurl = (process.env.BASE_URL ?? '') as string;

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