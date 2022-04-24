import { Box, Toolbar, Typography, AppBar, Button, Avatar } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { useUtils } from '../../contexts/UtilsContext'
import AdminTopBar from '../layouts/AdminTopBar'
import DropDownMenu from './DropDownMenu'

const TopAppBar = () => {
    const { isAuthenticated } = useUtils()
    if (isAuthenticated) return <AdminTopBar />
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
                        <Typography color="primary.light" variant="h6">
                            Logo
                        </Typography>
                    </NavLink>

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
                            <Avatar src="https://scontent.fdac135-1.fna.fbcdn.net/v/t1.6435-1/105628205_2639916699583247_8652900520274639984_n.jpg?stp=dst-jpg_p200x200&_nc_cat=106&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeGRR-ktHVp5oQ8OQUmueEB4vnkd-IV4e7y-eR34hXh7vGEQpGBmqut9vhBhcKvgERC5bxGsF3KMX114xCuxb_AS&_nc_ohc=SVFu7JDn-bYAX_E9bbs&_nc_ht=scontent.fdac135-1.fna&oh=00_AT-FFb5uuMwpGSDjjdbhsQD7Qo3WVTAh2QyY9Z2y0EYu6A&oe=628376FA" />
                        )}
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default TopAppBar
