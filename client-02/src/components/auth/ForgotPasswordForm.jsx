import React from 'react'
import {
    Typography,
    Grid,
    Box,
    Paper,
    TextField,
    CssBaseline,
    Button,
    Avatar,
} from '@mui/material'

import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import BgOverlayImage from '../../utils/BgOverlayImage'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { forgotPasswordSchema } from '../../utils/validators'
import { API } from '../../api'
import ToastMessage from '../ui/ToastMessage'

const ForgotPasswordForm = () => {
    const [errorMessage, setErrorMessage] = React.useState('')
    const [message, setMessage] = React.useState('')

    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(forgotPasswordSchema),
        defaultValues: {
            email: '',
        },
    })
    const onSubmit = async value => {
        const { data, errors } = await API.forgotPassword(value)
        if (!errors) {
            setMessage(data.message)
            reset()
            return
        }
        setErrorMessage(errors.message)
    }

    return (
        <Box>
            {errorMessage && (
                <ToastMessage
                    setMessage={setErrorMessage}
                    message={errorMessage}
                    type="error"
                    toastId="forgot-password-error"
                />
            )}
            {message && (
                <ToastMessage
                    setMessage={setMessage}
                    message={message}
                    type="success"
                    toastId="forgot-password-success"
                />
            )}
            <Grid
                container
                component="main"
                sx={{ height: 'calc(100vh - 64px)', mt: 8 }}
            >
                <CssBaseline />

                <Grid
                    item
                    xs={12}
                    sm={8}
                    md={5}
                    component={Paper}
                    elevation={6}
                    square
                >
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1 }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Forgot Password
                        </Typography>
                        <Box
                            component="form"
                            noValidate
                            onSubmit={handleSubmit(onSubmit)}
                            sx={{ mt: 1 }}
                        >
                            <Controller
                                name="email"
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        autoComplete="email"
                                        autoFocus
                                        FormHelperTextProps={{
                                            error: errors.email ? true : false,
                                        }}
                                        helperText={errors.email?.message}
                                    />
                                )}
                            />

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Submit
                            </Button>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={false} sm={4} md={7}>
                    <BgOverlayImage
                        height="calc(100vh - 64px)"
                        bgImage="/images/ar-part-3.png"
                        styles={{ alignItems: 'start' }}
                    >
                        <Box zIndex={100} position="relative" mt={10} ml={7}>
                            <Typography
                                variant="h2"
                                color="primary.light"
                                mb={5}
                                fontWeight={600}
                            >
                                Let's get back to learning!
                            </Typography>
                            <Typography
                                variant="h3"
                                color="primary.light"
                                fontWeight={500}
                                mb={2}
                            >
                                Did you know:
                            </Typography>
                            <Typography variant="h5" color="primary.light">
                                Formula 1 cars carry 110kg of fuel every race!
                            </Typography>
                        </Box>
                    </BgOverlayImage>
                </Grid>
            </Grid>
        </Box>
    )
}

export default ForgotPasswordForm
