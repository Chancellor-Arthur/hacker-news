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
    const [pages, setPages] = useState(0);
    const lastElement = useRef<HTMLDivElement | null>(null);

    const [fetchPosts, isPostsLoading, postError] = useFetching(async (pages) => {
        const response = await PostService.getAllFromPages(pages);
        if (response) {
            if (response.length > totalPosts) {
                setPosts(response.slice(0, totalPosts));
            } else {
                setPosts(response);
            }
        }
    });

    const reloadEvent = () => fetchPosts(Math.ceil(posts.length / postsInPage));

    useObserver(
        lastElement,
        pages < Math.ceil(totalPosts / postsInPage),
        isPostsLoading,
        () => setPages((pages) => pages + 1)
    );

    useEffect(() => {
        fetchPosts(pages);
    }, [pages]);

    useEffect(() => {
        setInterval(reloadEvent, 60000);
    }, []);

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
