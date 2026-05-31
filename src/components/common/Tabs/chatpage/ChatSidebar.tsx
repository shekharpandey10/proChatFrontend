import {
    Search,
    SquarePen,
} from "lucide-react";
import ConversationCard from "./ConversationCard";



const conversations = [
    {
        id: 1,
        name: "Sarah Jenkins",
        message:
            "The quarterly report looks great...",
        time: "10:42 AM",
        active: true,
    },

    {
        id: 2,
        name: "Marcus Chen",
        message:
            "Can you send the figma file?",
        time: "Yesterday",
    },

    {
        id: 3,
        name: "Jessica Wu",
        message:
            "Draft approved.",
        time: "Monday",
    },
];

function ChatSidebar() {
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
            {/* Header */}
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
          "
                >
                    <SquarePen />
                </button>
            </div>

            {/* Search */}
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

            {/* Conversation List */}
            <div
                className="
          flex-1
          overflow-y-auto
          px-3
        "
            >
                {conversations.map(
                    (conversation) => (
                        <ConversationCard
                            key={conversation.id}
                            {...conversation}
                        />
                    )
                )}
            </div>
        </div>
    );
}

export default ChatSidebar;