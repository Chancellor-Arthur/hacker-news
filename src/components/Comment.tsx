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
    const [components, setComponents] = useState<JSX.Element[]>([]);
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
                                    components.length = 0;
                                    const temporaryArray: JSX.Element[] = [];
                                    comment.comments.map((comm) => {
                                        temporaryArray.push(<Comment comment={comm} key={comm.id}/>);
                                    });
                                    setComponents(temporaryArray);
                                }}
                            >
                                <ArrowDropDownIcon/>
                            </IconButton>
                        )}
                    </div>
                    <Typography sx={{boxSizing: "border-box"}}
                        dangerouslySetInnerHTML={{__html: comment.content}}
                    ></Typography>
                    {components.map((component) => component)}
                </div>
            </ListItem>
        </>
    );
};

export default Comment;
