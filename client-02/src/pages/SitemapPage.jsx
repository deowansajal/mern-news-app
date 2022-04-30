import React from 'react'

import { NavLink } from 'react-router-dom'

import { Box, Typography, Container, List, ListItem } from '@mui/material'

const SitemapPage = () => {
    return (
        <Box
            height="calc(100vh - 260px)"
            display="flex"
            alignItems="center"
            my={5}
        >
            <Container>
                <Typography component="h2" variant="h2" mb={10}>
                    Sitemap
                </Typography>
                <List>
                    <ListItem>
                        <NavLink exact to="/">
                            Home
                        </NavLink>
                    </ListItem>
                    <ListItem>
                        <Box component="div">
                            Understanding F1
                            <List>
                                <ListItem>
                                    <NavLink exact to="/tutorials">
                                        Tutorials
                                    </NavLink>
                                </ListItem>
                            </List>
                        </Box>
                    </ListItem>
                    <ListItem>
                        <NavLink to="/learn">Learn Using AR</NavLink>
                    </ListItem>
                </List>
            </Container>
        </Box>
    )
}

export default SitemapPage
