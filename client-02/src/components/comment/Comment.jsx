import * as React from 'react'

import {
    Avatar,
    Box,
    Button,
    Divider,
    ListItem,
    ListItemAvatar,
    Typography,
    Paper,
    TextField,
    ListItemText,
    List,
} from '@mui/material'

const CommentComponent = ({ author, content, replies }) => {
    console.log({ content, author })
    const [open, setOpen] = React.useState(false)

    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <Box sx={{ bgcolor: '#f9f9f9' }} mb={3}>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>{author?.name.charAt(0)}</Avatar>
                </ListItemAvatar>
                <ListItemText primary={author?.name} secondary={content} />
            </ListItem>
            {open && (
                <ListItem>
                    <List sx={{ width: '100%' }}>
                        {replies.map((reply, index) => (
                            <>
                                <ListItem
                                    key={index}
                                    sx={{ bgcolor: '#fff', mb: 1 }}
                                >
                                    <ListItemAvatar>
                                        <Avatar>
                                            {reply.author.charAt(0)}
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={
                                            <Typography component="div">
                                                {reply.author}
                                            </Typography>
                                        }
                                        secondary={
                                            <Typography component="div">
                                                {reply.content}
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                            </>
                        ))}
                    </List>
                </ListItem>
            )}

            <ListItem>
                {open && (
                    <>
                        <TextField
                            fullWidth
                            size="small"
                            sx={{ bgcolor: '#fff', border: 0 }}
                        />
                        <Button variant="contained" sx={{ ml: 2 }}>
                            Reply
                        </Button>
                    </>
                )}
            </ListItem>
            <ListItem>
                <ListItemText
                    primary={
                        <Button
                            sx={{ textTransform: 'lowercase' }}
                            onClick={handleClick}
                        >
                            {!open ? 'Show' : 'Hide'} Replies
                        </Button>
                    }
                />
            </ListItem>
        </Box>
    )
}

export default CommentComponent
