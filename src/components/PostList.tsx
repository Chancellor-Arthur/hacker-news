import React, { FC } from 'react';
import PostItem from './PostItem';
import { IPostInList } from '../types/types';

interface IPostListProps {
    posts: IPostInList[];
}

const PostList: FC<IPostListProps> = ({ posts }) => {
    return (
        <>
            {posts.map((post, index) => (
                <div style={{ margin: '2%' }} key={post.id}>
                    <PostItem number={index + 1} post={post} />
                </div>
            ))}
        </>
    );
};

export default PostList;
