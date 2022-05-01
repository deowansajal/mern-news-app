import React from 'react'

import {
    Avatar,
    Box,
    Button,
    ListItem,
    ListItemAvatar,
    Typography,
    TextField,
    ListItemText,
    List,
} from '@mui/material'

import { useReplyAdd } from '../../hooks/useReplyAdd'
import { useQueryClient } from 'react-query'
import { replySchema } from '../../utils/validators'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { formateDate } from '../../utils/formateDate'

const ReplyComponent = ({ reply }) => {
    return (
        <ListItem
            sx={{
                bgcolor: '#f4f4f4',
                width: '95%',
                ml: 'auto',
                borderRadius: '5px',
                borderBottom: '1px solid #e0e0e0',
                mt: 2,
            }}
        >
            <ListItemAvatar>
                <Avatar>{reply?.author?.name?.charAt(0)}</Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={
                    <Typography component="strong">
                        {reply?.author?.name}
                    </Typography>
                }
                secondary={reply?.content}
            />

            <Box>{formateDate(reply?.createdAt)}</Box>
        </ListItem>
    )
}

const ReplyForm = ({ onSubmit, control, errors }) => {
    return (
        <Box component="form" onSubmit={onSubmit} width="100%" display="flex">
            <Controller
                name="content"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        sx={{ bgcolor: '#fff', border: 0 }}
                        size="small"
                        required
                        fullWidth
                        id="content"
                        FormHelperTextProps={{
                            error: errors.content ? true : false,
                        }}
                        helperText={errors.content?.message}
                    />
                )}
            />
            <Box>
                <Button type="submit" variant="contained" sx={{ ml: 2 }}>
                    Reply
                </Button>
            </Box>
        </Box>
    )
}

const CommentComponent = ({
    _id: commentId,
    createdAt,
    author,
    content,
    replies,
    tutorialId,
    isAuthenticated,
}) => {
    const [open, setOpen] = React.useState(false)
    const { mutateAsync } = useReplyAdd()
    const queryClient = useQueryClient()

    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(replySchema),
        defaultValues: {
            content: '',
        },
    })
    const onSubmit = async value => {
        await mutateAsync({ data: value, tutorialId, commentId })
        reset()
        queryClient.invalidateQueries('comments')
    }
    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <Box bgcolor="#f9f9f9" borderBottom="1px solid #e0e0e0" mb={3}>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>{author?.name?.charAt(0)}</Avatar>
                </ListItemAvatar>
                <ListItemText primary={author?.name} secondary={content} />

                <Box>{formateDate(createdAt)}</Box>
            </ListItem>
            {open && (
                <ListItem>
                    <List sx={{ width: '100%' }}>
                        {replies.map(reply => (
                            <ReplyComponent key={reply._id} reply={reply} />
                        ))}
                    </List>
                </ListItem>
            )}

            <ListItem>
                {open && isAuthenticated && (
                    <ReplyForm
                        onSubmit={handleSubmit(onSubmit)}
                        control={control}
                        errors={errors}
                    />
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
