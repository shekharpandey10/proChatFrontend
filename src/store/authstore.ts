import { create } from 'zustand'
import { devtools } from "zustand/middleware";

interface authState {
    accessToken?: string | null;

    setAccessToken: (
        token: string | null
    ) => void;

    setUser: (
        user: authState['user'] | null
    ) => void;

    user: {
        email: string | null,
        id: string | null,
        first_name: string | null,
        last_name: string | null
    }
}

const initialUser = {
    email: null,
    id: null,
    first_name: null,
    last_name: null
};

const useAuthStore = create<authState>()(

    devtools(

        (set) => ({

            accessToken: null,

            setAccessToken: (token) =>

                set(
                    { accessToken: token },
                    false,
                    "auth/AccessToken"
                ),

            user: initialUser,

            setUser: (
                u: authState['user'] | null
            ) =>

                set(
                    {
                        user: u ?? initialUser
                    },
                    false,
                    "auth/setUser"
                )

        }),

        {
            name: "AuthStore"
        }

    )

);

export default useAuthStore;