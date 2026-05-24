import { createBrowserRouter } from "react-router-dom";
import ROUTES from "../utils/routePath";
import AuthLayout from '../layouts/AuthLayout'
import MainLayout from "../layouts/MainLayout";
import AuthPage from "../pages/AuthPage";
const router = createBrowserRouter([
    {
        path: ROUTES.HOME,
        element: <MainLayout />
    }, {
        element: <AuthLayout />
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