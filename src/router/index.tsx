import { createBrowserRouter } from "react-router-dom";
import ROUTES from "../utils/routePath";
import AuthLayout from '../layouts/AuthLayout'
import MainLayout from "../layouts/MainLayout";
import AuthPage from "../pages/AuthPage";
import PublicRoute from "@/components/PublicRoute";
import PrivateRoute from "@/components/PrivateRoute";
const router = createBrowserRouter([
    {
        path: ROUTES.HOME,
        element: <PrivateRoute>
            <MainLayout />
        </PrivateRoute>
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