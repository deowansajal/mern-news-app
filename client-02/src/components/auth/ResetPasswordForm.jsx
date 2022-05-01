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

import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import BgOverlayImage from '../../utils/BgOverlayImage'
import { resetPasswordSchema } from '../../utils/validators'
import ToastMessage from '../ui/ToastMessage'
import { API } from '../../api'

import { useParams } from 'react-router-dom'
import { localDB } from '../../utils/localDB'
import { useUtils } from '../../hooks/useUtils'

const ResetPasswordForm = () => {
    const { resetToken } = useParams()
    const { setIsAuthenticated } = useUtils()
    const [errorMessage, setErrorMessage] = React.useState('')

    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(resetPasswordSchema),

        defaultValues: {
            password: '',
            repeatPassword: '',
        },
    })
    const onSubmit = async value => {
        const { data, errors } = await API.resetPassword(value, resetToken)
        if (!errors) {
            localDB.setItem('token', data.data?.token)
            setIsAuthenticated(true)
            history.push('/')
            reset()
            return
        }
        setErrorMessage(errors.message)
    }

    return (
        <>
            <ToastMessage
                setMessage={setErrorMessage}
                message={errorMessage}
                type="error"
                toastId="signup-error"
            />
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
                        <Avatar>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Reset Password
                        </Typography>
                        <Box
                            component="form"
                            noValidate
                            onSubmit={handleSubmit(onSubmit)}
                            sx={{ mt: 1 }}
                        >
                            <Controller
                                name="password"
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        margin="normal"
                                        required
                                        fullWidth
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                        FormHelperTextProps={{
                                            error: errors.password
                                                ? true
                                                : false,
                                        }}
                                        helperText={errors.password?.message}
                                    />
                                )}
                            />

                            <Controller
                                name="repeatPassword"
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        margin="normal"
                                        required
                                        fullWidth
                                        label="Repeat Password"
                                        type="password"
                                        id="repeat-password"
                                        autoComplete="current-password"
                                        FormHelperTextProps={{
                                            error: errors.repeatPassword
                                                ? true
                                                : false,
                                        }}
                                        helperText={
                                            errors.repeatPassword?.message
                                        }
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
        </>
    )
}

export default ResetPasswordForm
