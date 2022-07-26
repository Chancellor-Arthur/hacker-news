import React, {FC} from 'react';
import {IItem} from "../types/types";
import {ListItem, ListItemAvatar, Typography} from "@mui/material";
import RedditIcon from '@mui/icons-material/Reddit';

interface CommentProps {
    comment: IItem;
}

const Comment: FC<CommentProps> = ({comment}) => {
    return (
        <>
            <ListItem alignItems="flex-start" style={{borderTop: '1px solid gray'}}>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'left', alignItems: 'center', borderBottom: '1px solid lightgray'}}>
                        <ListItemAvatar>
                            <RedditIcon/>
                        </ListItemAvatar>
                        <Typography style={{marginRight: 10}}>{comment.user}</Typography>
                        <Typography
                            sx={{display: 'inline'}}
                            variant="body2"
                            color="text.secondary"
                        >
                            {comment.time_ago}
                        </Typography>
                    </div>
                    <Typography><p dangerouslySetInnerHTML={{__html: comment.content}}></p></Typography>
                </div>
            </ListItem>
        </>
    );
};

export default Comment;