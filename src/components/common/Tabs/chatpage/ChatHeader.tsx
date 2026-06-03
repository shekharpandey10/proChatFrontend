import {
    Phone,
    Video,
    Info,
} from "lucide-react";

interface chatUserProp {
    first_name?: string,
    last_name?: string,
    id?: string,
}
interface ChatHeaderProps {
    chatUser: chatUserProp | null;
}


function ChatHeader({ chatUser }: ChatHeaderProps) {
    console.log(chatUser, 'cjskf')
    const { first_name, last_name }: any = chatUser || {};
    console.log(first_name, 'cjskf')
    return (
        <header
            className="
        h-20
        border-b
        bg-white
        px-6
        flex
        items-center
        justify-between
        w-full
      "
        >
            {/* LEFT */}
            <div
                className="
          flex
          items-center
          gap-4
        "
            >
                {/* Avatar */}
                <div className="relative">

                    <img
                        src="https://i.pravatar.cc/150?img=32"
                        alt="user"
                        className="
              w-12
              h-12
              rounded-full
              object-cover
            "
                    />

                    {/* Online Dot */}
                    <span
                        className="
              absolute
              bottom-0
              right-0
              w-3
              h-3
              rounded-full
              bg-green-500
              border-2
              border-white
            "
                    />
                </div>

                {/* User Info */}
                <div>
                    <h2
                        className="
              text-lg
              font-semibold
              text-gray-900
            "
                    >
                        {`${first_name}  ${last_name}`}
                    </h2>

                    <p
                        className="
              text-sm
              text-gray-500
            "
                    >
                        Last seen 5m ago
                    </p>
                </div>
            </div>

            {/* RIGHT ACTIONS */}
            <div
                className="
          flex
          items-center
          gap-5
        "
            >
                <button
                    className="
            text-gray-600
            hover:text-violet-600
            transition-colors
          "
                >
                    <Phone size={22} />
                </button>

                <button
                    className="
            text-gray-600
            hover:text-violet-600
            transition-colors
          "
                >
                    <Video size={22} />
                </button>

                {/* Divider */}
                <div
                    className="
            h-6
            w-px
            bg-gray-300
          "
                />

                <button
                    className="
            text-gray-600
            hover:text-violet-600
            transition-colors
          "
                >
                    <Info size={22} />
                </button>
            </div>
        </header>
    );
}

export default ChatHeader;