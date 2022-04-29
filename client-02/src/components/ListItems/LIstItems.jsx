import React from 'react'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import DashboardIcon from '@mui/icons-material/Dashboard'

import AddIcon from '@mui/icons-material/Add'

import { NavLink } from 'react-router-dom'

export const mainListItems = (
    <React.Fragment>
        <NavLink
            to="/admin"
            style={{ textDecoration: 'none', color: 'inherit' }}
        >
            <ListItemButton>
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
            </ListItemButton>
        </NavLink>
        <NavLink
            to="/admin/addTutorial"
            style={{ textDecoration: 'none', color: 'inherit' }}
        >
            <ListItemButton>
                <ListItemIcon>
                    <AddIcon />
                </ListItemIcon>
                <ListItemText primary="Add Tutorial" />
            </ListItemButton>
        </NavLink>
    </React.Fragment>
)
