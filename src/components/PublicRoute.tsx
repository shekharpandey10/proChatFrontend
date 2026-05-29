import useAuthStore from '@/store/authstore'
import { Loader2 } from 'lucide-react'
import { Navigate } from 'react-router-dom'
import { Spinner } from "@/components/ui/spinner";


function PublicRoute({ children }: any) {
    const accessToken = useAuthStore(store => store.accessToken)
    const isAuthLoader = useAuthStore(state => state.isAuthLoader)

    if (isAuthLoader) {
        return <div className='w-full h-screen flex justify-center items-center'>
            <Spinner className='size-10' />
        </div>
    }


    if (accessToken) {
        return <Navigate to="/" />;
    }
    return children;
}

export default PublicRoute
