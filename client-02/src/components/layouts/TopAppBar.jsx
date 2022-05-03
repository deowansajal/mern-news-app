import { Box, Toolbar, Typography, AppBar, Button, Avatar } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { useUtils } from '../../hooks/useUtils'
import { useGetMe } from '../../hooks/useGetMe'
import DropDownMenu from './DropDownMenu'
import useMediaQuery from '@mui/material/useMediaQuery'
const TopAppBar = () => {
    const { isAuthenticated } = useUtils()
    const { data } = useGetMe()
    const matches = useMediaQuery('(min-width:600px)')

    return (
        <AppBar color="secondary">
            <Toolbar>
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    flexGrow={1}
                >
                    <NavLink to="/" style={{ textDecoration: 'none' }}>
                        <Box
                            width={'100px'}
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <img src="/images/logo.png" width={'100%'} />
                        </Box>
                    </NavLink>

                    {matches && (
                        <Box display="flex" alignItems="center">
                            <DropDownMenu />
                            <NavLink
                                to="/learn"
                                style={{
                                    textDecoration: 'none',
                                    color: 'inherit',
                                    marginLeft: '1.5rem',
                                }}
                            >
                                Learn using AR
                            </NavLink>
                        </Box>
                    )}

                    <Box display="flex" alignItems="center">
                        {!isAuthenticated && (
                            <>
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
                            </>
                        )}
                        {isAuthenticated && (
                            <NavLink
                                exact
                                to="/me"
                                style={{ textDecoration: 'none' }}
                            >
                                <Avatar style={{ cursor: 'pointer' }}>
                                    {data?.data?.data?.user?.name?.slice(0, 2)}
                                </Avatar>
                            </NavLink>
                        )}
                    </Box>
                </Box>
            </Toolbar>
            {!matches && (
                <Toolbar sx={{ mx: 'auto' }}>
                    <Box display="flex" alignItems="center">
                        <DropDownMenu />
                        <NavLink
                            to="/learn"
                            style={{
                                textDecoration: 'none',
                                color: 'inherit',
                                marginLeft: '1.5rem',
                            }}
                        >
                            Learn using AR
                        </NavLink>
                    </Box>
                </Toolbar>
            )}
        </AppBar>
    )
}

export default TopAppBar
