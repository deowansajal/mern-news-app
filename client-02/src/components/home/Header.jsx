import { NavLink } from 'react-router-dom'
import { Button, Box, Container, Typography } from '@mui/material'

import BgOverlayImage from '../../utils/BgOverlayImage'

const Item = ({ title, description }) => {
    return (
        <Container
            sx={{
                zIndex: 100,
            }}
        >
            <Box maxWidth={600}>
                <Typography variant="h2" color="white" fontWeight="bold">
                    {title}
                </Typography>
                <Typography component="p" color="white" mt="1rem">
                    {description}
                </Typography>
                <NavLink
                    exact
                    to="/tutorials"
                    style={{ textDecoration: 'none' }}
                >
                    <Button
                        variant="contained"
                        size="large"
                        sx={{ mt: '2rem', color: 'white' }}
                    >
                        Get Started
                    </Button>
                </NavLink>
            </Box>
        </Container>
    )
}

const Header = () => {
    var items = [
        {
            title: 'Finding F1 difficult to understand?',
            description:
                'Learn all aspects of Formula 1 using our precisely written explanations or watch our outstanding tutorial videos in a centralised hub for all F1 fans',
        },
    ]

    return (
        <header>
            <BgOverlayImage bgImage="/images/home-header.jpg">
                {items.map((item, i) => (
                    <Item
                        key={i}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </BgOverlayImage>
        </header>
    )
}

export default Header
