import ChatHeader from '@/components/common/Tabs/chatpage/ChatHeader'
import { socket } from '@/config/socket'
import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

function ChatLayout() {

    return (
        <div className='flex '>
            <div className='flex-1'>
                <Outlet />
            </div>
        </div>
    )
}

export default ChatLayout
