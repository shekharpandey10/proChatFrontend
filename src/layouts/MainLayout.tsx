import React from 'react'
import PublicNav from '../components/layouts/PublicNav'
import { Outlet } from 'react-router-dom'
import PublicFooter from '../components/layouts/PublicFooter'
import SideBar from '@/components/common/Tabs/sidebar/SideBar'

function MainLayout() {
    return (
        <div className="min-h-screen flex ">

            {/* <PublicNav /> */}
            <SideBar />

            <main className="flex-1">
                <Outlet />
            </main>

            {/* <PublicFooter /> */}

        </div>
    )
}

export default MainLayout
