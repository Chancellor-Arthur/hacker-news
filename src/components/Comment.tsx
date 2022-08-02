import React, {FC, useState} from "react";
import {IPostOnPage} from "../types/types";
import {ListItem, ListItemAvatar, Typography} from "@mui/material";
import RedditIcon from "@mui/icons-material/Reddit";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import IconButton from "@mui/material/IconButton";

interface CommentProps {
    comment: IPostOnPage;
}

const Comment: FC<CommentProps> = ({comment}) => {
    const [comments, setComments] = useState<IPostOnPage[]>([]);
    return (
        <>
            <ListItem alignItems="flex-start" sx={{borderTop: "1px solid gray"}}>
                <div className="columnContainer">
                    <div className="rowContainerDetail">
                        <ListItemAvatar>
                            <RedditIcon/>
                        </ListItemAvatar>
                        <Typography sx={{marginRight: 10}}>{comment.user}</Typography>
                        <Typography
                            sx={{display: "inline", marginRight: 10}}
                            variant="body2"
                            color="text.secondary"
                        >
                            {comment.time_ago}
                        </Typography>
                        {comment.comments_count !== 0 && (
                            <IconButton
                                sx={{color: "black"}}
                                onClick={() => {
                                    comments.length = 0;
                                    setComments(comment.comments);
                                }}
                            >
                                <ArrowDropDownIcon/>
                            </IconButton>
                        )}
                    </div>
                    <Typography sx={{boxSizing: "border-box"}}
                        dangerouslySetInnerHTML={{__html: comment.content}}
                    ></Typography>
                    {comments.map((comment) => <Comment comment={comment} key={comment.id}/>)}
                </div>
            </ListItem>
        </>
    );
};

export default Comment;
