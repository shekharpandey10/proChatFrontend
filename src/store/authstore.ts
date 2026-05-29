import { create } from 'zustand'
import { devtools } from "zustand/middleware";

interface authState {
    accessToken?: string | null;


    setAccessToken: (
        token: string | null
    ) => void;

    isAuthenticated: boolean | null;


    setUser: (
        user: authState['user'] | null
    ) => void;

    user: {
        email: string | null,
        id: string | null,
        first_name: string | null,
        last_name: string | null
    };
    logout: () => void;
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
            isAuthenticated: false,

            setAccessToken: (token) =>

                set(
                    { accessToken: token, isAuthenticated: !!token },
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
                ),
            logout: () => set(
                { accessToken: null, user: initialUser, isAuthenticated: false },
                false,
                "auth/logout"
            )

        }),

        {
            name: "AuthStore"
        }

    )

);

export default useAuthStore;