import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import {Navigate, RouteObject} from "react-router-dom";

export const ROUTES: RouteObject[] = [
    {path: "/posts", element: <Posts/>},
    {path: "/posts/:id", element: <PostIdPage/>},
    {path: "*", element: <Navigate replace to="/posts"/>},
];
