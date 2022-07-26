import React, {useEffect, useRef, useState} from 'react';
import PostList from "../components/PostList";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import {IFeedItem} from "../types/types";
import {useObserver} from "../hooks/useObserver";
import {labelSlice, postsInPage, totalPosts} from "../constants/constants";
import DrawerAppBar from "../components/DrawerAppBar";
import LinearColor from "../components/LinearColor";

const Posts = () => {
    const [posts, setPosts] = useState<IFeedItem[]>([]);
    const [page, setPage] = useState(0);
    const [reload, setReload] = useState(false);
    const lastElement = useRef<HTMLDivElement | null>(null);

    const [fetchPosts, isPostsLoading, postError] = useFetching(async (page) => {
        const response = await PostService.getAllFromPage(page);
        if (posts.length === labelSlice) setPosts([...posts, ...response.data.slice(0, 10)]);
        else setPosts([...posts, ...response.data]);
    });

    const reloadEvent = () => {
        const count = posts.length;
        console.log(count);
        posts.length = 0;
        // for (let i = 1; i <= count / postsInPage; i++) {
        //     setPage(i);
        //     console.log(i);
        // }
    }

    useObserver(lastElement, page < Math.ceil(totalPosts / postsInPage),
        isPostsLoading, () => setPage(page => page + 1));

    useEffect(() => {
        fetchPosts(page);
    }, [page]);

    return (
        <div>
            <DrawerAppBar event={reloadEvent}/>
            <PostList posts={posts}/>
            <div ref={lastElement} style={{height: 20}}></div>
            {isPostsLoading && <LinearColor/>}
        </div>
    );
};

export default Posts;