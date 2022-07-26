import React, {FC} from 'react';
import PostItem from "./PostItem";
import {IFeedItem} from "../types/types";

interface PostListProps {
    posts: IFeedItem[];
}

const PostList: FC<PostListProps> = ({posts}) => {
    return (
        <>
            {posts.map((post, index) =>
                <div style={{margin: '2%'}} key={post.id}>
                    <PostItem number={index + 1} post={post}/>
                </div>)}
        </>
    );
};

export default PostList;