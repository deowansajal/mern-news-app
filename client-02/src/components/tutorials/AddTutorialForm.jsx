
import React from 'react'
import { Box, Button, TextField, Typography, Hidden } from '@mui/material'
import { yupResolver } from '@hookform/resolvers/yup'
import { tutorialSchema } from '../../utils/validators'
import { useForm, Controller } from 'react-hook-form'
import { API } from '../../api'

const AddTutorialForm = () => {
    const [fileName, setFileName] = React.useState('')
    const [file, setFile] = React.useState(null)

    const [errorMessage, setErrorMessage] = React.useState('')
    const {
        control,
        handleSubmit,
        register,

        formState: { errors },
    } = useForm({
        resolver: yupResolver(tutorialSchema),
        defaultValues: {
            title: '',
            content: '',
            tutorialImage: null,
        },
    })

    const onSubmit = async value => {
        const formData = new FormData()
        formData.append('title', value.title)
        formData.append('content', value.content)
        formData.append('tutorialImage', file)
        console.log({ value })
        const { data, errors } = await API.addTutorial(formData)

        if (!errors) {
            return
        }
        setErrorMessage(errors.message)
    }

    console.log(errors)
    return (
        <Box component="form" width="100%" onSubmit={handleSubmit(onSubmit)}>
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
    )
}

export default AddTutorialForm
