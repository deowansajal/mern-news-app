import * as React from 'react'
import ListSubheader from '@mui/material/ListSubheader'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import DraftsIcon from '@mui/icons-material/Drafts'
import SendIcon from '@mui/icons-material/Send'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import StarBorder from '@mui/icons-material/StarBorder'
import ReplyIcon from '@mui/icons-material/Reply'
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
} from '@mui/material'

export default function NestedList({ username, body, replies }) {
    const [open, setOpen] = React.useState(false)

    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <Box sx={{ bgcolor: '#f9f9f9' }} mb={3}>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>{username.charAt(0)}</Avatar>
                </ListItemAvatar>
                <ListItemText primary={username} secondary={body} />
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
                                            {reply.username.charAt(0)}
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={
                                            <Typography component="div">
                                                {reply.username}
                                            </Typography>
                                        }
                                        secondary={
                                            <Typography component="div">
                                                {reply.body}
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
