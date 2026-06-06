import ChatHeader
    from "./ChatHeader";

import MessageList
    from "./MessageList";

import MessageInput
    from "./MessageInput";
import { useEffect, useState } from "react";
import api from "@/utils/api";
import apiRoutes from "@/utils/apiRoutes";
import handleResponse from "@/utils/handleResponse";
import { Spinner } from "@/components/ui/spinner";
import { sendMessage } from "@/config/socket";


interface chatWindowProp {
    selectedId?: string | null
}

function ChatWindow({ selectedId }: chatWindowProp) {
    const [ChatData, setChatData] = useState([])
    const [chatUser, setChatUser] = useState(null)
    const [loading, setLoading] = useState(false)
    const fetchChat = async () => {
        try {
            setLoading(true)
            const response = await api.get(apiRoutes.chat.fetchChatDetail + selectedId)
            const result = response.data
            if (result?.success) {
                setChatData(result?.data?.messages)
                setChatUser(result?.data?.chatUser)
            }
            console.log(result)
        } catch (error) {
            handleResponse(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (!selectedId) return
        fetchChat()
    }, [selectedId])

    const submitMessage = (text: string) => {
        if (!selectedId) return;
        console.log(selectedId)
        sendMessage(selectedId, text)
    }

    return (
        <div
            className="
        flex-1
        flex
        flex-col
        bg-gray-50
      "
        >
            {selectedId ? (!loading ? <>
                <ChatHeader chatUser={chatUser} />

                <MessageList />

                <MessageInput submitMessage={submitMessage} />
            </> : <div className='flex justify-center h-screen items-center'>
                <Spinner className='size-10' />
            </div>) : <div className="flex justify-center h-screen items-center"><span>Start new conversation</span></div>}
        </div>
    );
}

export default ChatWindow;