import * as React from 'react'
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

import { NavLink } from 'react-router-dom'

const StyledMenu = styled(props => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        backgroundColor: '#006BA6',
        color: 'white',

        '& .MuiMenu-list': {
            padding: '4px 0',
        },
    },
}))

const DropDownMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState(null)
    const open = Boolean(anchorEl)
    const handleClick = event => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <div>
            <Button
                style={{ color: 'white' }}
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
            >
                Understanding F1
            </Button>
            <StyledMenu anchorEl={anchorEl} open={open} onClose={handleClose}>
                <MenuItem
                    onClick={handleClose}
                    disableRipple
                    style={{ padding: 0 }}
                >
                    <NavLink
                        to="/tutorials"
                        style={{
                            textDecoration: 'none',
                            color: 'white',
                            width: '100%',
                            padding: '4px 16px',
                        }}
                    >
                        Tutorials
                    </NavLink>
                </MenuItem>
            </StyledMenu>
        </div>
    )
}

export default DropDownMenu
