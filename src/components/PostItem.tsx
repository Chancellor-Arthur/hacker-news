import React, {FC} from 'react';
import {IFeedItem} from "../types/types";
import {Box, Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";

interface PostItemProps {
    post: IFeedItem;
    number: number;
}

const PostItem: FC<PostItemProps> = ({post, number}) => {
    const router = useNavigate();
    const time = new Date(post.time * 1000);
    return (
        <Box>
            <Card>
                <CardContent>
                    <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                        News - {number}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {post.title}
                    </Typography>
                    <Typography sx={{mb: 1.5}} color="text.secondary">
                        Author: {post.user}
                    </Typography>
                    <Typography variant="body2">
                        Rating: {post.points} point(s)
                        <br/>
                        Date: {time.getDate()}.{`0${time.getMonth() + 1}`}.
                        {time.getFullYear()} {time.getHours()}:{time.getMinutes()}:{time.getSeconds()}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="info" onClick={() => router(`/posts/${post.id}`)}>
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        </Box>
    );
};

export default PostItem;