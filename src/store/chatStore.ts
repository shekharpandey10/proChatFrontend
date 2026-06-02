import { create } from 'zustand'
import { devtools } from 'zustand/middleware'


interface chatStore {
    currentSelected?: string | null

    setCurrentSelected: (id: string | null) => void
}


const useChatStore = create<chatStore>()(devtools(

    (set) => ({
        currentSelected: null,
        setCurrentSelected: (id) =>
            set(
                { currentSelected: id }
            ),
    }),

    { name: 'chat-store' }
))

export default useChatStore