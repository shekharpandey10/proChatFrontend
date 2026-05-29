import useAuthStore from "@/store/authstore"
import api from "@/utils/api"
import apiRoutes from "@/utils/apiRoutes"
import handleResponse from "@/utils/handleResponse"



const checkAuth = async () => {
    const { accessToken, logout, setAccessToken } = useAuthStore.getState();
    try {
        const response = await api.put(apiRoutes.auth.refreshToken)
        console.log(response)
        const result = response?.data
        if (result?.success) {
            await setAccessToken(result.accessToken)
        } else {
            logout()
            window.location.href = "/login";



        }

    } catch (error) {
        logout()
        window.location.href = "/login";
        handleResponse(error)
    }
}

export default checkAuth