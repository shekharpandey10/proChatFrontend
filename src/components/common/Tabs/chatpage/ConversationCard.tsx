interface Props {
    name: string;

    message: string;

    time: string;

    active?: boolean;
}

function ConversationCard({
    name,
    message,
    time,
    active,
}: Props) {
    return (
        <div
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
                    ? "bg-violet-100"
                    : "hover:bg-gray-100"
                }
      `}
        >
            {/* Avatar */}
            <img
                src="https://i.pravatar.cc/150?img=32"
                className="
          w-14
          h-14
          rounded-full
        "
            />

            {/* Content */}
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