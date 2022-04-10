import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import BgOverlayImage from '../../utils/BgOverlayImage'
import { useForm, Controller } from 'react-hook-form'

export default function LoginForm() {
    const { control, handleSubmit } = useForm({
        defaultValues: {
            email: '',
            password: '',
        },
    })
    const onSubmit = value => {
        console.log({ value })
    }

    return (
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
                    <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Login
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
                                />
                            )}
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Login
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
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
    )
}
