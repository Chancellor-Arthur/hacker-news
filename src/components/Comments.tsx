import React, {FC} from 'react';
import Comment from "./Comment";
import {List, Typography} from "@mui/material";
import {IPostOnPage} from "../types/types";

interface CommentProps {
    comments: IPostOnPage[];
}

const Comments: FC<CommentProps> = ({comments}) => {
    return (
        <List sx={{width: "100%", bgcolor: "background.paper"}}>
            {comments.length ? (
                comments.map((comment) => <Comment comment={comment} key={comment.id}/>)
            ) : (
                <Typography sx={{fontSize: 24}}>No comments...</Typography>
            )}
        </List>
    );
};

export default Comments;
