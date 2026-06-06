import {
    Search,
    SquarePen,
} from "lucide-react";

import ConversationCard
    from "./ConversationCard";

import api from "@/utils/api";

import apiRoutes
    from "@/utils/apiRoutes";

import {
    useEffect,
    useState,
} from "react";

import handleResponse
    from "@/utils/handleResponse";

import {
    NewChatDialog,
} from "./NewChatDialog";

type ConversationType = {
    id: string;

    first_name: string;

    last_name: string;

    avatar?: string;

    lastMessage?: string;
};

type ChatSidebarProp = {
    selectedId: string | null;

    setSelectedId: (
        id: string
    ) => void;
};

function ChatSidebar({
    selectedId,
    setSelectedId,
}: ChatSidebarProp) {
    const [
        conversations,
        setConversations,
    ] = useState<
        ConversationType[]
    >([]);

    const [
        loading,
        setLoading,
    ] = useState(false);

    const [
        newChat,
        setNewChat,
    ] = useState(false);


    const fetchList =
        async () => {
            try {
                setLoading(true);

                const response =
                    await api.get(
                        apiRoutes.chat
                            .aleadyMessages
                    );

                const result =
                    response.data;

                const data =
                    result?.data || [];

                setConversations(data);

                if (data.length > 0) {
                    setSelectedId(
                        data[0].id
                    );
                }
            } catch (error) {
                handleResponse(error);
            } finally {
                setLoading(false);
            }
        };

    useEffect(() => {
        fetchList();
    }, []);

    return (
        <div
            className="
        w-[380px]
        h-screen
        border-r
        bg-white
        flex
        flex-col
      "
        >
            {/* HEADER */}
            <div
                className="
          p-6
          border-b
          flex
          items-center
          justify-between
        "
            >
                <h1
                    className="
            text-3xl
            font-bold
          "
                >
                    Messages
                </h1>

                <button
                    className="
            w-12
            h-12
            rounded-2xl
            bg-violet-600
            text-white
            flex
            items-center
            justify-center
            hover:bg-violet-700
            transition-all
          "
                    onClick={() =>
                        setNewChat(true)
                    }
                >
                    <SquarePen />
                </button>
            </div>

            {/* SEARCH */}
            <div className="p-4">
                <div
                    className="
            flex
            items-center
            gap-2
            bg-gray-100
            px-4
            py-3
            rounded-xl
          "
                >
                    <Search size={18} />

                    <input
                        placeholder="Search..."
                        className="
              bg-transparent
              outline-none
              w-full
            "
                    />
                </div>
            </div>

            {/* LIST */}
            <div
                className="
          flex-1
          overflow-y-auto
          px-3
          pb-4
        "
            >
                {loading ? (
                    <div
                        className="
              h-full
              flex
              items-center
              justify-center
              text-gray-500
            "
                    >
                        Loading...
                    </div>
                ) : conversations.length >
                    0 ? (
                    conversations.map(
                        (conversation) => (
                            <ConversationCard
                                key={
                                    conversation.id
                                }
                                name={`${conversation.first_name} ${conversation.last_name}`}
                                message={
                                    conversation.lastMessage ||
                                    "Start chatting..."
                                }
                                active={
                                    selectedId ===
                                    conversation.id
                                }
                                time="10:42 AM"
                                avatar={
                                    conversation.avatar
                                }
                                onClick={() =>
                                    setSelectedId(
                                        conversation.id
                                    )
                                }
                            />
                        )
                    )
                ) : (
                    <div
                        className="
              h-full
              flex
              items-center
              justify-center
              text-gray-400
            "
                    >
                        No conversations found
                    </div>
                )}
            </div>

            <NewChatDialog
                open={newChat}
                setOpen={setNewChat}
                setSelectedId={setSelectedId}
                title="Start New Chat"
                desc="Search users and start conversations"
            />
        </div>
    );
}

export default ChatSidebar;