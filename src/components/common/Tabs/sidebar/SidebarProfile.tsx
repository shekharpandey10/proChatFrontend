function SidebarProfile() {
    return (
        <div
            className="
        p-4
        border-t
      "
        >
            <div
                className="
          flex
          items-center
          gap-3
        "
            >
                <img
                    src="https://i.pravatar.cc/40"
                    className="
            w-10
            h-10
            rounded-full
          "
                />

                <div>
                    <p className="font-medium">
                        Alex Rivera
                    </p>

                    <p
                        className="
              text-sm
              text-green-500
            "
                    >
                        Online
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SidebarProfile;