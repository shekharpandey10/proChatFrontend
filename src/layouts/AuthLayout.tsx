import PublicNav from '../components/layouts/PublicNav'
import { Outlet } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast('Here is your toast.');

function AuthLayout() {
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
