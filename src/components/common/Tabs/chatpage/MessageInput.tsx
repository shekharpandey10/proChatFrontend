import {
    Send,
    Smile,
    Plus,
} from "lucide-react";

function MessageInput() {
    return (
        <div
            className="
        p-5
        border-t
        bg-white
      "
        >
            <div
                className="
          flex
          items-center
          gap-4
          bg-gray-100
          rounded-2xl
          px-5
          py-4
        "
            >
                <button>
                    <Plus />
                </button>

                <button>
                    <Smile />
                </button>

                <input
                    placeholder="Write message..."
                    className="
            flex-1
            bg-transparent
            outline-none
          "
                />

                <button
                    className="
            bg-violet-600
            text-white
            px-5
            py-3
            rounded-xl
          "
                >
                    <Send size={18} />
                </button>
            </div>
        </div>
    );
}

export default MessageInput;