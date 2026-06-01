import useAuthStore from '@/store/authstore'
import { Navigate } from 'react-router-dom';
import { Loader2 } from "lucide-react";
import { Spinner } from './ui/spinner';
import { useEffect } from 'react';
import { socket } from '@/config/socket';
function PrivateRoute({ children }: any) {

    const accessToken = useAuthStore(state => state.accessToken)
    const isAuthLoader = useAuthStore(state => state.isAuthLoader)

    useEffect(() => {
        if (!accessToken) return
        socket.auth = {
            token: accessToken,
        };
        socket.connect()

        socket.on('connect', () => {
            console.log('socket connected ', socket.id)
        })

        socket.on('disconnect', () => {
            console.log(
                "Socket disconnected"
            )
        })


        return () => {
            socket.off('connect')
            socket.off('disconnect')
            socket.disconnect()
        }
    }, [accessToken])

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
