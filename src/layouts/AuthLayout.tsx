import PublicNav from '../components/layouts/PublicNav'
import { Outlet } from 'react-router-dom'


function AuthLayout() {

    return (
        <div className='min-h-screen flex flex-col  '>
            <PublicNav />
            <main className='flex-1 mt-4'>
                <Outlet />
            </main>
            {/* <PublicFooter /> */}
        </div>
    )
}

export default AuthLayout
