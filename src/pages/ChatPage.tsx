import ChatSidebar from '@/components/common/Tabs/chatpage/ChatSidebar'
import ChatWindow from '@/components/common/Tabs/chatpage/ChatWindow'
import api from '@/utils/api';
import apiRoutes from '@/utils/apiRoutes';
import handleResponse from '@/utils/handleResponse';
import { useEffect, useState } from 'react'

function ChatPage() {
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [chatData, setChatData] = useState(null)


    const fetchConversation = async () => {
        try {
            debugger
            const response = await api.get(apiRoutes.chat.fetchChatDetail + selectedId)
            const result = response.data

        } catch (error) {
            handleResponse(error)
        }
    }

    useEffect(() => {
        if (selectedId) fetchConversation()
    }, [selectedId])
    return (
        <div className='flex' >

            <ChatSidebar setSelectedId={setSelectedId} selectedId={selectedId} />
            <ChatWindow />

        </div>
    )
}

export default ChatPage
