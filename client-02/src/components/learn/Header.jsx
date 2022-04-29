import {
    Box,
    Container,
    Typography,
    List,
    ListItem,
    Link,
    useMediaQuery,
} from '@mui/material'

import BgOverlayImage from '../../utils/BgOverlayImage'

const links = [
    { href: 'download', title: 'Download' },
    { href: 'f1-cars', title: 'F1 Cars ' },
    { href: 'f1-components', title: ' F1 Components' },
    { href: 'f1-rules', title: 'F1 Rules' },
]

const Header = () => {
    const matches = useMediaQuery('(min-width:600px)')
    return (
        <header>
            <BgOverlayImage height="100vh" bgImage="/images/ar.png">
                <Container
                    sx={{
                        zIndex: 100,
                    }}
                >
                    <Box
                        sx={{
                            maxWidth: 600,
                            textColor: 'white',
                        }}
                    >
                        <Typography
                            variant={matches ? 'h2' : 'h4'}
                            sx={{ color: 'white', fontWeight: 'bold' }}
                        >
                            Immerse yourself into Formula 1 with our unique
                            Augmented Reality experience
                        </Typography>
                        <List sx={{ mt: 4 }}>
                            {links.map(link => (
                                <ListItem
                                    key={link.href}
                                    sx={{
                                        '&::before': {
                                            content: '""',
                                            fontWeight: 'bold',
                                            display: 'inline-block',
                                            width: '.6em',
                                            marginLeft: '-1em',
                                            color: 'white',
                                            background: 'white',
                                            height: '.6em',
                                            borderRadius: '50%',
                                        },
                                    }}
                                >
                                    <Link
                                        href={`#${link.href}`}
                                        variant={matches ? 'h4' : 'h6'}
                                        color="primary.light"
                                        ml={1}
                                    >
                                        {link.title}
                                    </Link>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Container>
            </BgOverlayImage>
        </header>
    )
}

export default Header
