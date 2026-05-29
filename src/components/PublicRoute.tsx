import useAuthStore from '@/store/authstore'
import { Navigate } from 'react-router-dom'

function PublicRoute({ children }: any) {
    const accessToken = useAuthStore(store => store.accessToken)

    if (accessToken) {
        return <Navigate to="/" />;
    }
    return children;
}

export default PublicRoute
