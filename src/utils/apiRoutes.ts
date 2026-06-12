const baseurl = import.meta.env.VITE_BASE_URL;
const apiRoutes = {
    auth: {
        login: baseurl + 'login',
        logout: baseurl + 'logout',
        refreshToken: baseurl + 'auth/refresh'
    },
    chat: {
        fetchConversationFirst: baseurl + "chat/conversation",
        aleadyMessages: baseurl + "chat/conversation/userList",
        newUserList: baseurl + "chat/discovery",
        fetchChatDetail: baseurl + 'chat/discovery/'
    }

}

export default apiRoutes