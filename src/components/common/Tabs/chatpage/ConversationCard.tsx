type Props = {
    name: string;

    message: string;

    time: string;

    active?: boolean;

    avatar?: string;

    onClick?: () => void;
};

function ConversationCard({
    name,
    message,
    time,
    active,
    avatar,
    onClick,
}: Props) {
    return (
        <div
            onClick={onClick}
            className={`
        flex
        items-center
        gap-4
        p-4
        rounded-2xl
        cursor-pointer
        transition-all
        mb-2

        ${active
                    ? `
              bg-violet-100
            `
                    : `
              hover:bg-gray-100
            `
                }
      `}
        >
            {/* AVATAR */}
            <img
                src={
                    avatar ||
                    "https://i.pravatar.cc/150?img=32"
                }
                className="
          w-14
          h-14
          rounded-full
          object-cover
        "
            />

            {/* CONTENT */}
            <div className="flex-1">

                <div
                    className="
            flex
            justify-between
            items-center
          "
                >
                    <h3
                        className="
              font-semibold
              text-lg
            "
                    >
                        {name}
                    </h3>

                    <span
                        className="
              text-xs
              text-gray-500
            "
                    >
                        {time}
                    </span>
                </div>

                <p
                    className="
            text-gray-500
            truncate
          "
                >
                    {message}
                </p>
            </div>
        </div>
    );
}

export default ConversationCard;