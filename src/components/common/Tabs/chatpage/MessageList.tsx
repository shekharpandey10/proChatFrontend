function MessageList() {
    return (
        <div
            className="
        flex-1
        overflow-y-auto
        p-6
        space-y-4
      "
        >
            {/* Receiver */}
            <div
                className="
          max-w-[60%]
          bg-white
          p-4
          rounded-2xl
        "
            >
                Hi Alex! Have you checked
                the report?
            </div>

            {/* Sender */}
            <div
                className="
          max-w-[60%]
          bg-violet-100
          p-4
          rounded-2xl
          ml-auto
        "
            >
                Yes, reviewing it now.
            </div>
        </div>
    );
}

export default MessageList;