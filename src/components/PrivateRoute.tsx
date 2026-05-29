import useAuthStore from '@/store/authstore'
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }: any) {

    const accessToken = useAuthStore(state => state.accessToken)
    if (!accessToken) {
        return (
            <Navigate to="/login" />
        );
    }

    return children;
};


export default PrivateRoute
