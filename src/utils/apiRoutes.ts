const baseurl = import.meta.env.VITE_BASE_URL;
const apiRoutes = {
    auth: {
        login: baseurl + 'login',
        refreshToken: baseurl + 'auth/refresh'
    }

}

export default apiRoutes