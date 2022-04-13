import React from 'react'
import {
    Box,
    Button,
    Container,
    Typography,
    Grid,
    Divider,
} from '@mui/material'
import Tutorial from '../components/tutorial/Tutorial'
import { tutorials } from '../data/tutorials'

const Header = ({ title, author, date, image }) => {
    return (
        <Box mt={15} component="header" mb={10}>
            <Typography variant="h2" textAlign="center" mb={5}>
                {title}
            </Typography>
            <img src={image} alt="" width="100%" />
            <Box display="flex">
                <Box>
                    <Typography variant="p">{date}</Typography>
                    <Typography variant="body2">{author}</Typography>
                </Box>
            </Box>
        </Box>
    )
}

const Tutorials = ({ tutorials }) => (
    <Box component="section">
        <Typography variant="h3" align="center" mt={5} mb={4}>
            All Tutorials
        </Typography>
        <Grid container spacing={3}>
            {tutorials
                .concat(tutorials)
                .map(({ id, title, author, image, date }) => (
                    <Grid key={id} item xs={12} lg={4}>
                        <Tutorial
                            title={title}
                            author={author}
                            image={image}
                            date={date}
                        />
                    </Grid>
                ))}
        </Grid>
    </Box>
)

const AllTutorialsPage = () => {
    return (
        <Box minHeight="100vh">
            <Container>
                <Header
                    title="title one"
                    author="by Eoghan Canty"
                    date="22nd October 2021"
                    image="/images/ar.png"
                />
                <Divider />

                <Tutorials tutorials={tutorials} />
            </Container>
        </Box>
    )
}

export default AllTutorialsPage
