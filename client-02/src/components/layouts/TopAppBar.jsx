import { Box, Toolbar, Typography, AppBar, Button } from '@mui/material'
import { NavLink } from 'react-router-dom'
import AdminTopBar from '../layouts/AdminTopBar'

const TopAppBar = () => {
    if (1 !== 1) return <AdminTopBar />
    return (
        <AppBar color="secondary">
            <Toolbar>
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    flexGrow={1}
                >
                    <Typography>Logo</Typography>

                    <Box display="flex" alignItems="center">
                        <NavLink
                            exact
                            to="/auth/login"
                            style={{ textDecoration: 'none' }}
                        >
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
                        <NavLink
                            exact
                            to="/auth/signup"
                            style={{ textDecoration: 'none' }}
                        >
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
        </AppBar>
    )
}

export default TopAppBar
