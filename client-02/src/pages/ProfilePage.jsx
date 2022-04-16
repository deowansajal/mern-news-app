import {
    Avatar,
    Box,
    Container,
    Divider,
    List,
    ListItem,
    ListItemText,
    Typography,
} from '@mui/material'
import React from 'react'

const user = {
    image: 'https://picsum.photos/200',
    name: 'Sajal Deowan',
    email: 'test@tester.com',
}
const ProfilePage = () => {
    const { image, name, email } = user

    return (
        <Container>
            <Box
                height="calc(100vh - 146.6px)"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                mx="auto"
            >
                <Box display="flex">
                    <Avatar
                        src={image}
                        variant="square"
                        sx={{ width: 244, height: 244, mr: 5 }}
                    />
                    <Typography variant="h4" component="h4">
                        {name}
                    </Typography>
                </Box>
                <Box mt={5}>
                    <Typography variant="p" component="p">
                        About
                    </Typography>
                    <Divider />
                    <List sx={{ mt: 2 }}>
                        <ListItem sx={{ pl: 0 }}>
                            <Typography mr={5} color="secondary">
                                Name:
                            </Typography>
                            <Typography color="#555555">{name}</Typography>
                        </ListItem>
                        <ListItem sx={{ pl: 0 }}>
                            <Typography mr={5} color="secondary">
                                Email:
                            </Typography>
                            <Typography variant="p" color="#555555">
                                {email}
                            </Typography>
                        </ListItem>
                    </List>
                </Box>
            </Box>
        </Container>
    )
}

export default ProfilePage
