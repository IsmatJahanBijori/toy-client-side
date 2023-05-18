import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import Blog from "../pages/Blog/Blog";
import AddAToy from "../pages/AddAToy/AddAToy";
import AllToys from "../pages/AllToys/AllToys";
import SingleToyDetail from "../pages/SingleToyDetail/SingleToyDetail";
import PrivateRoute from "./PrivateRoute";
import MyToys from "../pages/MyToys/MyToys";
import UpdateToys from "../pages/MyToys/UpdateToys";
// import DeleteToys from "../pages/MyToys/DeleteToys";

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage />,
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/addToy',
                element: <PrivateRoute><AddAToy /></PrivateRoute>
            },
            {
                path: '/toys',
                element: <AllToys />
            },
            {
                path: '/toys/:id',
                element: <PrivateRoute><SingleToyDetail /></PrivateRoute>,
                loader:({params})=>fetch(`https://toy-server-side.vercel.app/toys/${params.id}`)
            },
            {
                path: '/myToys',
                element: <PrivateRoute><MyToys /></PrivateRoute>,
            },
            {
                path: '/updateToys/:id',
                element: <UpdateToys/>,
                loader:({params})=>fetch(`https://toy-server-side.vercel.app/myToys/${params.id}`)
            },
            // {
            //     path: '/deleteToys/:id',
            //     element: <DeleteToys/>,
            //     loader:({params})=>fetch(`https://toy-server-side.vercel.app/myToys/${params.id}`)
            // },
        ]
    },
]);
export default router