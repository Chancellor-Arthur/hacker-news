import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import {Navigate, RouteObject} from "react-router-dom";

export const ROUTES: RouteObject[] = [
    {path: "/", element: <Posts/>},
    {path: ":id", element: <PostIdPage/>},
    {path: "*", element: <Navigate replace to="/"/>},
];
