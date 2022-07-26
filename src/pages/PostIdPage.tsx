import React, {useEffect, useState} from 'react';
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import {IItem} from "../types/types";
import {useParams} from "react-router-dom";
import {Box, Card, CardContent, List, Typography} from "@mui/material";
import Comment from '../components/Comment';

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState<IItem>();

    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id);
        setPost(response.data);
    });

    useEffect(() => {
        // @ts-ignore
        fetchPostById(params.id);
    }, []);

    if (!post) {
        return <></>;
    }
    const time = new Date(post.time * 1000);

    return (
        <Box style={{margin: '2%'}}>
            <Card>
                <CardContent>
                    <Typography sx={{fontSize: 18}} color="text.secondary" gutterBottom>
                        News
                    </Typography>
                    <Typography variant="h4" component="div">
                        {post.title}
                    </Typography>
                    <Typography sx={{mb: 1.5, fontSize: 20}} color="text.secondary">
                        Author: {post.user}
                    </Typography>
                    <Typography variant="body2" sx={{fontSize: 20}}>
                        URL: <a href={post.url}>{post.url}</a>
                        <br/>
                        Date: {time.getDate()}.{`0${time.getMonth() + 1}`}.
                        {time.getFullYear()} {time.getHours()}:{time.getMinutes()}:{time.getSeconds()}
                        <br/>
                        Comments count: {post.comments_count}
                    </Typography>
                    <Typography sx={{fontSize: 26}} style={{paddingBottom: '1%', paddingTop: '2%'}}>
                        Comments
                    </Typography>
                    <List sx={{width: '100%', bgcolor: 'background.paper'}}>
                        {post.comments.length ? post.comments.map(comment =>
                            <Comment comment={comment}/>
                        ) : <h3>No comments...</h3>}
                    </List>
                </CardContent>
            </Card>
        </Box>
    );
};

export default PostIdPage;