import { create } from 'zustand'
import { devtools } from "zustand/middleware";

interface authState {
    accessToken?: string | null;


    setAccessToken: (
        token: string | null
    ) => void;

    isAuthenticated: boolean;
    isAuthLoader: boolean
    setIsAuthLoader: (isLoading: boolean) => void;

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
            isAuthLoader: true,
            setAccessToken: (token) =>

                set(
                    { accessToken: token, isAuthenticated: !!token, isAuthLoader: false },
                    false,
                    "auth/AccessToken"
                ),
            setIsAuthLoader: (isLoading) =>
                set(
                    { isAuthLoader: isLoading },
                    false,
                    "auth/setIsAuthLoader"
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
                { accessToken: null, user: initialUser, isAuthenticated: false, isAuthLoader: false },
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