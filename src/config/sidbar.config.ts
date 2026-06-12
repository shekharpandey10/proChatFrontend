import {
    MessageSquare,
    Users,
    User,
    Settings,
    HelpCircle,
    LogOut,
} from "lucide-react";

export const sidebarItems = [
    {
        title: "Chats",

        icon: MessageSquare,

        path: "/chat",
    },

    {
        title: "Contacts",

        icon: Users,

        path: "/contacts",
    },

    {
        title: "Profile",

        icon: User,

        path: "/profile",
    },

    {
        title: "Settings",

        icon: Settings,

        path: "/settings",
    },
];

export const bottomItems = [
    {
        title: "Help",

        icon: HelpCircle,

        path: "/help",
    },

    {
        title: "Logout",
        action: "logout",

        icon: LogOut,


    },
];