import { Box, Button, Container, Typography, Grid } from '@mui/material'
import React from 'react'

const NotFoundPage = () => {
    return (
        <Box height={600} mt={15} component={Container} alignItems="center">
            <Grid container>
                <Grid item md={6}>
                    <Typography variant="h1">Oops!</Typography>
                    <Typography variant="h6">
                        We're sorry for the inconvenience but the page you've
                        requested has not been found
                    </Typography>
                    <Box mt={5}>
                        <Button variant="outlined" size="large" sx={{ mr: 2 }}>
                            Home
                        </Button>
                        <Button
                            variant="outlined"
                            size="large"
                            color="secondary"
                        >
                            Site Map
                        </Button>
                    </Box>
                </Grid>
                <Grid item md={6}>
                    <img src="/images/404.jpg" alt="404" width="100%" />
                </Grid>
            </Grid>
        </Box>
    )
}

export default NotFoundPage
