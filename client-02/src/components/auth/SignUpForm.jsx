import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'

import {
    List,
    ListItem,
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
import { signupSchema } from '../../utils/validators'
import { API } from '../../api'
import ToastMessage from '../ui/ToastMessage'

const tags = [
    'Exclusive articles',
    'Exclusive videos',
    'Ability to and comment on tutorials',
]
const SignUpForm = () => {
    const [errorMessage, setErrorMessage] = React.useState('')
    const history = useHistory()

    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(signupSchema),

        defaultValues: {
            name: '',
            email: '',
            password: '',
        },
    })

    const onSubmit = async value => {
        const { data, errors } = await API.signup(value)
        if (!errors) {
            reset()
            history.push('/auth/login')
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
                        <Avatar sx={{ m: 1 }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign Up
                        </Typography>
                        <Box
                            component="form"
                            noValidate
                            onSubmit={handleSubmit(onSubmit)}
                            sx={{ mt: 1 }}
                        >
                            <Controller
                                name="name"
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="name"
                                        label="Name"
                                        autoComplete="name"
                                        autoFocus
                                        FormHelperTextProps={{
                                            error: errors.name ? true : false,
                                        }}
                                        helperText={errors.name?.message}
                                    />
                                )}
                            />
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
                                        type="email"
                                        label="Email Address"
                                        autoComplete="email"
                                        FormHelperTextProps={{
                                            error: errors.email ? true : false,
                                        }}
                                        helperText={errors.email?.message}
                                    />
                                )}
                            />

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
                                            error: errors.password,
                                        }}
                                        helperText={errors.password?.message}
                                    />
                                )}
                            />

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign Up
                            </Button>
                            <Grid container>
                                <Grid item>
                                    <NavLink to="/auth/login" variant="body2">
                                        {'Already have an account? Login'}
                                    </NavLink>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={false} sm={4} md={7}>
                    <BgOverlayImage
                        height="calc(100vh - 64px)"
                        bgImage="/images/ar-part-3.png"
                        styles={{ alignItems: 'start' }}
                    >
                        <Box zIndex={100} position="relative" mx="auto" mt={10}>
                            <Typography
                                variant="h2"
                                color="primary.light"
                                mb={5}
                                ml={7}
                                fontWeight={600}
                            >
                                Benefits to becoming an F1 Guide member
                            </Typography>

                            <List sx={{ mt: 4, ml: 7 }}>
                                {tags.map((tag, i) => (
                                    <ListItem
                                        key={i}
                                        sx={{
                                            '&::before': {
                                                content: '""',
                                                fontWeight: 'bold',
                                                display: 'inline-block',
                                                width: '.6em',
                                                marginLeft: '-1em',
                                                color: 'white',
                                                background: 'white',
                                                height: '.6em',
                                                borderRadius: '50%',
                                            },
                                        }}
                                    >
                                        <Typography
                                            variant="h6"
                                            color="primary.light"
                                            ml={1}
                                        >
                                            {tag}
                                        </Typography>
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    </BgOverlayImage>
                </Grid>
            </Grid>
        </>
    )
}

export default SignUpForm
