import { Box, Container, Typography, Icon, Divider } from '@mui/material'

import { useHistory, NavLink } from 'react-router-dom'

const Footer = () => {
    const history = useHistory()
    return (
        <footer>
            <Box sx={{ backgroundColor: '#454545', color: 'white', py: 2 }}>
                <Container>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Box>
                            <Typography variant="h4">Contact us</Typography>
                            <Typography>thef1guide@gmail.com</Typography>
                        </Box>

                        <Box>
                            <Typography variant="h4">Follow us</Typography>
                            <Divider color="white" sx={{ my: 2 }} />
                            <Box
                                sx={{
                                    maxWidth: 140,
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    mt: 2,
                                }}
                            >
                                <img
                                    src="/images/youtube-icon.png"
                                    width={40}
                                />
                                <img
                                    src="/images/instagram-icon.png"
                                    width={40}
                                />
                                <img
                                    src="/images/twitter-icon.png"
                                    width={40}
                                />
                            </Box>
                        </Box>
                    </Box>
                    <Box component="nav" display="flex" mt={2}>
                        <NavLink
                            to="/sitemap"
                            style={{ textDecoration: 'none' }}
                        >
                            <Typography color="white">Sitemap</Typography>
                        </NavLink>
                        <NavLink
                            to="/admin"
                            style={{
                                textDecoration: 'none',
                                alignSelf: 'center',
                                flexGrow: 1,
                                textAlign: 'center',
                            }}
                        >
                            <Typography color="white">Admin</Typography>
                        </NavLink>
                    </Box>
                </Container>
            </Box>
        </footer>
    )
}

export default Footer
