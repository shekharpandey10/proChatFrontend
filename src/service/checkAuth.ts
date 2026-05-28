import api from "@/utils/api"
import apiRoutes from "@/utils/apiRoutes"


const checkAuth = async () => {
    try {
        const response = await api.put(apiRoutes.auth.refreshToken)
        console.log(response)
    } catch (error) {

    }
}

export default checkAuth