import { createBrowserRouter } from "react-router-dom";
import ROUTES from "../utils/routePath";
import AuthLayout from '../layouts/AuthLayout'
import MainLayout from "../layouts/MainLayout";
import AuthPage from "../pages/AuthPage";
import PublicRoute from "@/components/PublicRoute";
import PrivateRoute from "@/components/PrivateRoute";
import ChatLayout from "@/layouts/ChatLayout";
import ChatPage from "@/pages/ChatPage";
const router = createBrowserRouter([
    {
        path: ROUTES.HOME,
        element: <PrivateRoute>
            <MainLayout />
        </PrivateRoute>,
        children: [
            {

                element: <ChatLayout />,
                children: [
                    {
                        path: "/chat",

                        element: <ChatPage />,
                    },

                    {
                        path: "/chat/:id",

                        element: <ChatPage />,
                    },
                ]
            }
        ]
    }, {
        element: <PublicRoute>
            <AuthLayout />
        </PublicRoute>
        , children: [
            {
                path: "/login",
                element: <AuthPage />,
            },

            {
                path: "/signup",
                element: <AuthPage />,
            },
        ]
    },
    {
        path: '*',
        element: 'bsdl'
    }
])

export default router