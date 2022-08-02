import React, {useEffect, useRef, useState} from "react";
import PostList from "../components/PostList";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import {IPostInList} from "../types/types";
import {useObserver} from "../hooks/useObserver";
import {postsInPage, totalPosts} from "../constants/constants";
import AppBar from "../components/AppBar";
import Loader from "../components/Loader";

const Posts = () => {
    const [posts, setPosts] = useState<IPostInList[]>([]);
    const [currentPage, setCurrentPage] = useState(0);
    const lastElement = useRef<HTMLDivElement | null>(null);

    const [fetchPosts, isPostsLoading, postError] = useFetching(async (pages) => {
        const response = await PostService.getAllFromPages(pages);
        if (response) {
            if (response.length > Math.round(totalPosts / postsInPage)) {
                setPosts(
                    response
                        .map((promise) => promise.data)
                        .flat()
                        .slice(0, totalPosts)
                );
            } else {
                setPosts(response.map((promise) => promise.data).flat());
            }
        }
    });

    const reloadEvent = () => {
        console.log(currentPage);
        fetchPosts(currentPage);
    };

    useObserver(
        lastElement,
        currentPage < Math.ceil(totalPosts / postsInPage),
        isPostsLoading,
        () => setCurrentPage((pages) => pages + 1)
    );

    useEffect(() => {
        fetchPosts(currentPage);
    }, [currentPage]);

    useEffect(() => {
        const timer = setInterval(reloadEvent, 60000);
        return () => clearInterval(timer);
    }, [currentPage]);

    if (postError) {
        return <h1 style={{color: "white"}}>{postError}</h1>;
    }

    return (
        <div>
            <AppBar event={reloadEvent}/>
            <PostList posts={posts}/>
            <div ref={lastElement} style={{height: 20}}></div>
            {isPostsLoading && <Loader/>}
        </div>
    );
};

export default Posts;
