import React from 'react'
import { styled } from '@mui/material/styles'
import MuiAppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'

const drawerWidth = 240

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: prop => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}))

const AdminTopBar = () => {
    const [open, setOpen] = React.useState(true)
    const toggleDrawer = () => {
        setOpen(!open)
    }

    return (
        <AppBar color="secondary" open={open}>
            <Toolbar
                sx={{
                    pr: '24px',
                }}
            >
                <IconButton
                    edge="start"
                    color="inherit"
                    onClick={toggleDrawer}
                    sx={{
                        marginRight: '36px',
                        ...(open && { display: 'none' }),
                    }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    component="h1"
                    variant="h6"
                    color="inherit"
                    noWrap
                    sx={{ flexGrow: 1 }}
                >
                    Dashboard
                </Typography>
                <IconButton color="inherit">
                    <Avatar />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default AdminTopBar
