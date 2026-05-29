import PublicNav from '../components/layouts/PublicNav'
import { Outlet } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import checkAuth from '@/service/checkAuth';
import { useEffect } from 'react';


function AuthLayout() {
    useEffect(() => {
        checkAuth()
    }, [])
    return (
        <div className='min-h-screen flex flex-col  '>
            <PublicNav />
            <main className='flex-1 mt-4'>
                <Toaster />
                <Outlet />
            </main>
            {/* <PublicFooter /> */}
        </div>
    )
}

export default AuthLayout
