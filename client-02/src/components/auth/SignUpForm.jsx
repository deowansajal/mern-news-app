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
import { List, ListItem } from '@mui/material'
const tags = [
    'Exclusive articles',
    'Exclusive videos',
    'Ability to and comment on tutorials',
]
const SignUpForm = () => {
    const { control, handleSubmit } = useForm({
        defaultValues: {
            name: '',
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
                            Sign Up
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
    )
}

export default SignUpForm
