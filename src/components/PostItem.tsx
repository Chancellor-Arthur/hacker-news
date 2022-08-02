import React, {FC} from "react";
import {IPostInList} from "../types/types";
import {Box, Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {dateAndTime} from "../utils/dateAndTime";

interface PostItemProps {
    post: IPostInList;
    number: number;
}

const PostItem: FC<PostItemProps> = ({post, number}) => {
    const router = useNavigate();
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
                        {dateAndTime(new Date(post.time * 1000))}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        size="small"
                        color="info"
                        onClick={() => router(`/posts/${post.id}`)}
                    >
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        </Box>
    );
};

export default PostItem;
