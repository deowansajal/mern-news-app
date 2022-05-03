import {
    Box,
    Container,
    Typography,
    Divider,
    useMediaQuery,
} from '@mui/material'

import { NavLink } from 'react-router-dom'
import { useGetMe } from '../../hooks/useGetMe'
import { useUtils } from '../../hooks/useUtils'

const Footer = () => {
    const matches = useMediaQuery('(min-width:600px)')
    const { data, isLoading } = useGetMe()
    const { isAuthenticated } = useUtils()
    const user = data?.data?.data?.user

    return (
        <Box
            component="footer"
            sx={{
                bgcolor: '#454545',
                color: 'white',
                position: 'relative',
                zIndex: 10000,
                py: 2,
            }}
        >
            <Container>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <Box>
                        <Typography variant={matches ? 'h4' : 'h5'}>
                            Contact us
                        </Typography>
                        <Typography>thef1guide@gmail.com</Typography>
                    </Box>

                    <Box>
                        <Typography variant={matches ? 'h4' : 'h5'}>
                            Follow us
                        </Typography>
                        <Divider color="white" sx={{ my: 2 }} />
                        <Box
                            sx={{
                                maxWidth: 140,
                                display: 'flex',
                                justifyContent: 'space-between',
                                mt: 2,
                            }}
                        >
                            <img src="/images/youtube-icon.png" width={40} />
                            <img src="/images/instagram-icon.png" width={40} />
                            <img src="/images/twitter-icon.png" width={40} />
                        </Box>
                    </Box>
                </Box>
                <Box component="nav" display="flex" mt={2}>
                    <NavLink to="/sitemap" style={{ textDecoration: 'none' }}>
                        <Typography color="white">Sitemap</Typography>
                    </NavLink>
                    {isAuthenticated && user?.role === 'admin' && (
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
                    )}
                </Box>
            </Container>
        </Box>
    )
}

export default Footer
