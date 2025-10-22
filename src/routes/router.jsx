import { createBrowserRouter } from "react-router";
import Home from "../layouts/Home";


const router= createBrowserRouter(
    [

        {
            path: "/",
            element:<Home/>,
        },
        {
            path: "/sur",
            element: <h2>Servec</h2>,
        },
        {
            path: "/pu",
            element: <h2>My Profile</h2>,
        },
       

    ]);

    export default router;