import {
    Box,
    Container,
    Toolbar,
    Typography,
    AppBar,
    Button,
} from '@mui/material'
import { NavLink } from 'react-router-dom'

const TopAppBar = () => {
    return (
        <AppBar color="secondary">
            <Container>
                <Toolbar>
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                        flexGrow={1}
                    >
                        <Typography>Logo</Typography>

                        <Box display="flex" alignItems="center">
                            <NavLink exact to="/auth/login">
                                <Button
                                    sx={{
                                        marginRight: '1.5rem',
                                        color: 'white',
                                    }}
                                    variant="contained"
                                >
                                    Login
                                </Button>
                            </NavLink>
                            <NavLink exact to="/auth/signup">
                                <Button
                                    sx={{
                                        color: 'white',
                                    }}
                                    variant="outlined"
                                >
                                    Sign Up
                                </Button>
                            </NavLink>
                        </Box>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default TopAppBar
