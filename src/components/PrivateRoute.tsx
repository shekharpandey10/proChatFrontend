import useAuthStore from '@/store/authstore'
import { Navigate } from 'react-router-dom';
import { Loader2 } from "lucide-react";
import { Spinner } from './ui/spinner';
function PrivateRoute({ children }: any) {

    const accessToken = useAuthStore(state => state.accessToken)
    const isAuthLoader = useAuthStore(state => state.isAuthLoader)

    if (isAuthLoader) {
        return <div className='w-full h-screen flex justify-center items-center'>
            <Spinner className='size-10' />
        </div>
    }

    if (!accessToken) {
        return (
            <Navigate to="/login" />
        );
    }

    return children;
};


export default PrivateRoute
