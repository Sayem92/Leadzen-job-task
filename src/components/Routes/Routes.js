import { createBrowserRouter } from "react-router-dom";
import AllUsers from "../AllUsers/AllUsers";
import Main from "../Layout/Main";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element: <AllUsers></AllUsers>
            }
        ]
    }
])