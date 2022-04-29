import {
    Typography,
    Box,
    Container,
    List,
    TextField,
    Divider,
    Button,
} from '@mui/material'
import CommentComponent from '../comment/Comment'
import { useForm, Controller } from 'react-hook-form'
import { commentSchema } from '../../utils/validators'
import { yupResolver } from '@hookform/resolvers/yup'
import { useCommentAdd } from '../../hooks/useCommentAdd'
import { useQueryClient } from 'react-query'

const TutorialDetails = ({ tutorialId, title, content, image, comments }) => {
    const { mutateAsync } = useCommentAdd()
    const queryClient = useQueryClient()

    const {
        control,
        handleSubmit,

        formState: { errors },
    } = useForm({
        resolver: yupResolver(commentSchema),
        defaultValues: {
            content: '',
        },
    })
    const onSubmit = async value => {
        await mutateAsync({ data: value, tutorialId })

        queryClient.invalidateQueries('comments')
    }

    console.log({ tutorialId })

    return (
        <Container>
            <Box mt={15}>
                <Box>
                    <Typography variant="h3" textAlign="center" mb={7}>
                        {title}
                    </Typography>
                    <Box maxWidth="960px" mx="auto" my={5}>
                        <img src={image} width="100%" alt={title} />
                    </Box>
                    <Typography fontSize="1.4rem" component="p">
                        {content}
                    </Typography>
                </Box>
                <Box py={3} my={10}>
                    <Typography variant="h4" textAlign="center" mb={7}>
                        Comments
                    </Typography>

                    <Divider pb={5} />

                    <List
                        sx={{
                            width: '100%',
                            maxWidth: 900,
                            mx: 'auto',
                            pt: 10,
                        }}
                    >
                        {comments?.map(comment => (
                            <CommentComponent
                                key={comment._id}
                                {...comment}
                                tutorialId={tutorialId}
                            />
                        ))}
                    </List>

                    <Box
                        component="form"
                        width="100%"
                        maxWidth={900}
                        mt={10}
                        mx="auto"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <Controller
                            name="content"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Write your comment here"
                                    sx={{ mb: 3 }}
                                    margin="normal"
                                    multiline
                                    rows={7}
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

                        <Button
                            type="submit"
                            variant="contained"
                            size="large"
                            sx={{ mt: 2 }}
                        >
                            Submit
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default TutorialDetails
