import useAuthStore from "@/store/authstore"
import api from "@/utils/api"
import apiRoutes from "@/utils/apiRoutes"
import handleResponse from "@/utils/handleResponse"



const checkAuth = async () => {
    const { logout, setAccessToken, setIsAuthLoader } = useAuthStore.getState();
    try {
        const response = await api.put(apiRoutes.auth.refreshToken)
        console.log(response)
        const result = response?.data
        if (result?.success) {
            await setAccessToken(result.accessToken)
            await setIsAuthLoader(false)
        } else {
            logout()
        }

    } catch (error) {
        logout()
        handleResponse(error)
    }
}

export default checkAuth