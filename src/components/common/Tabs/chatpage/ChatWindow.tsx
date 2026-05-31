import ChatHeader
    from "./ChatHeader";

import MessageList
    from "./MessageList";

import MessageInput
    from "./MessageInput";

function ChatWindow() {
    return (
        <div
            className="
        flex-1
        flex
        flex-col
        bg-gray-50
      "
        >
            <ChatHeader />

            <MessageList />

            <MessageInput />
        </div>
    );
}

export default ChatWindow;