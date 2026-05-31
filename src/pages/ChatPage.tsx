import ChatSidebar from '@/components/common/Tabs/chatpage/ChatSidebar'
import ChatWindow from '@/components/common/Tabs/chatpage/ChatWindow'

function ChatPage() {
    return (
        <div className='flex' >

            <ChatSidebar />
            <ChatWindow />

        </div>
    )
}

export default ChatPage
