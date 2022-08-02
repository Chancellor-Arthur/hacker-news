import React, {useEffect, useState} from "react";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import {IPostOnPage} from "../types/types";
import {useNavigate, useParams} from "react-router-dom";
import {Box, Card, CardContent, Typography} from "@mui/material";
import Comments from "../components/Comments";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {dateAndTime} from "../utils/dateAndTime";
import Loader from "../components/Loader";

const PostIdPage = () => {
    const params = useParams();
    const [reload, setReload] = useState(false);
    const [post, setPost] = useState<IPostOnPage>();

    const router = useNavigate();

    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id);
        setPost(response.data);
    });

    const reloadEvent = () => setReload((reload) => !reload);

    useEffect(() => {
        if (params.id) fetchPostById(+params.id);
    }, [reload]);

    useEffect(() => {
        const timer = setInterval(reloadEvent, 60000);
        return () => clearInterval(timer);
    }, []);

    if (!post) {
        return null;
    }

    if (isLoading) {
        return <Loader/>;
    }

    if (error) {
        return <h1 style={{color: "white"}}>{error}</h1>;
    }

    return (
        <Box style={{margin: "2%"}}>
            <Card>
                <CardContent>
                    <div className="rowContainer">
                        <Typography
                            sx={{fontSize: 18}}
                            color="text.secondary"
                            gutterBottom
                        >
                            News
                        </Typography>
                        <IconButton
                            style={{color: "black"}}
                            onClick={() => router("/posts")}
                        >
                            <ArrowBackIcon/>
                        </IconButton>
                    </div>
                    <Typography variant="h4" component="div">
                        {post.title}
                    </Typography>
                    <Typography sx={{mb: 1.5, fontSize: 20}} color="text.secondary">
                        Author: {post.user}
                    </Typography>
                    <Typography variant="body2" sx={{fontSize: 20}}>
                        URL: <a href={post.url}>{post.url}</a>
                        <br/>
                        {dateAndTime(new Date(post.time * 1000))}
                        <br/>
                        Comments count: {post.comments_count}
                    </Typography>
                    <br/>
                    <div className="rowContainer">
                        <Typography sx={{fontSize: 26}}>Comments</Typography>
                        <IconButton sx={{color: "black"}} onClick={reloadEvent}>
                            <AutorenewIcon/>
                        </IconButton>
                    </div>
                    <Comments comments={post.comments}/>
                </CardContent>
            </Card>
        </Box>
    );
};

export default PostIdPage;
