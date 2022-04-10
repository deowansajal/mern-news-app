import { Box, Container, Toolbar, Typography } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'

import AccountCircle from '@mui/icons-material/AccountCircle'

const TopAppBar = () => {
    return (
        <AppBar color="secondary">
            <Container>
                <Toolbar>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexGrow: 1,
                        }}
                    >
                        <Typography>Logo</Typography>
                        {/* <Typography>
                            <AccountCircle />
                        </Typography> */}
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}
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
                            <Button
                                sx={{
                                    color: 'white',
                                }}
                                variant="outlined"
                            >
                                Sign Up
                            </Button>
                        </Box>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default TopAppBar
