import { createBrowserRouter } from "react-router";
import Home from "../layouts/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layouts/AuthLayout";
import ProtectedRoute from "../components/ProtectedRoute";
import ServiceDetailsPage from "../components/ServiceDetailsPage";
import PetCareTips from "../components/PetCareTips";
import PetServices from "../components/PetServices";
import UserProfile from "../components/UserProfile";
import MyProfile from "../layouts/MyProfile";
import ForgotPassword from "../pages/ForgotPassword";


const router= createBrowserRouter(
    [

        {
            path: "/",
            element:<Home/>,
        },
        {
            path: "/auth",
            element:<AuthLayout></AuthLayout>,
            children:[
                {
                    path:"/auth/login",
                    element:<Login></Login>
                },
                {
                    path:"/auth/register",
                    element:<Register></Register>
                },
                {
                    path: "/auth/forgot-password",
                    element: <ForgotPassword></ForgotPassword>
                  }
            ],
        },
        {
            path: "/service/:id",
            element: (
              <ProtectedRoute>
                <ServiceDetailsPage />
              </ProtectedRoute>
            ),
          },
        {
            path: "/services",
            element: <PetServices></PetServices>,
            children:[
                {
                    path : "/services/:id",
                element:<ServiceDetailsPage></ServiceDetailsPage>
                }
            ]
        },
        {
            path: "/profile",
            element:<MyProfile></MyProfile>,
            children: [
                {
                    index:true,
                    element: <UserProfile></UserProfile>
                }
            ]
        },
        {
          path: "/*",
          element:<h1>Error-404</h1>
        },
       

    ]);

    export default router;