
import { create } from 'zustand'

interface authState {
    accessToken?: string | null,
    setAccessToken: (token: string | null) => void;
}

const useAuthStore = create<authState>((set) => ({
    accessToken: null,
    setAccessToken: (token) => (set({ accessToken: token }))
}))


export default useAuthStore