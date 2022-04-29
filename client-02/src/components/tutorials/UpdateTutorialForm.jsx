import React from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import { yupResolver } from '@hookform/resolvers/yup'
import { tutorialSchema } from '../../utils/validators'
import { useForm, Controller } from 'react-hook-form'
import { useTutorialUpdate } from '../../hooks/useTutorialUpdate'
import { useQueryClient } from 'react-query'
import { useTutorial } from '../../hooks/useTutorial'
import ToastMessage from '../ui/toastMessage'

const UpdateTutorialForm = ({ tutorialId }) => {
    const [file, setFile] = React.useState(null)
    const queryClient = useQueryClient()

    const { mutateAsync: tutorialUpdate } = useTutorialUpdate()

    const { data } = useTutorial(tutorialId)

    const updateTutorial = async (data, tutorialId) => {
        data.tutorialId = tutorialId
        await tutorialUpdate(data, tutorialId)

        queryClient.invalidateQueries('tutorials')
    }

    const [errorMessage, setErrorMessage] = React.useState('')
    const [message, setMessage] = React.useState('')

    const {
        control,
        handleSubmit,
        setValue,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(tutorialSchema),
        defaultValues: {
            title: '',
            content: '',
        },
    })

    React.useEffect(() => {
        setValue('title', data?.data?.data?.tutorial?.title)
        setValue('content', data?.data?.data?.tutorial?.content)
    }, [data !== undefined])

    const onSubmit = async value => {
        const formData = new FormData()
        formData.append('title', value.title)
        formData.append('content', value.content)
        if (file) {
            formData.append('tutorialImage', file)
        }
        await updateTutorial(formData, tutorialId)

        setMessage('Tutorial updated successfully')
        setFile(null)
        reset()
    }

    return (
        <Box>
            {message && (
                <ToastMessage
                    message={message}
                    type="success"
                    setMessage={setMessage}
                    toastId="updatedTutorialSuccess"
                />
            )}
            <Box
                component="form"
                width="100%"
                onSubmit={handleSubmit(onSubmit)}
            >
                <Controller
                    name="title"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Tutorial title"
                            sx={{ mb: 3 }}
                            margin="normal"
                            required
                            fullWidth
                            id="title"
                            autoFocus
                            FormHelperTextProps={{
                                error: errors.title ? true : false,
                            }}
                            helperText={errors.title?.message}
                        />
                    )}
                />

                <Controller
                    name="content"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Tutorial content"
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
                <Box display="flex" mt={3}>
                    <Button variant="contained" component="label">
                        Choose File
                        <input
                            hidden
                            type="file"
                            onChange={e => setFile(e.target.files[0])}
                        />
                    </Button>
                    <Typography borderBottom="solid 1px rgba(0,0,0,.5)" ml={2}>
                        {file?.name}
                    </Typography>
                </Box>
                <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    fullWidth
                    sx={{ mt: 2 }}
                    color="secondary"
                >
                    Submit
                </Button>
            </Box>
        </Box>
    )
}

export default UpdateTutorialForm
