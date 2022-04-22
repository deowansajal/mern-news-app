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
import { useTutorials } from '../hooks/useTutorials'

import { PUBLIC_IMAGES_BASE_URL } from '../utils/constants'
import { formateDate } from '../utils/formateDate'
import { useComments } from '../hooks/useComments'

const Header = ({ title, author, createdAt, image }) => {
    return (
        <Box mt={15} component="header" mb={10}>
            <Typography variant="h2" textAlign="center" mb={5}>
                {title}
            </Typography>
            <img
                src={`${PUBLIC_IMAGES_BASE_URL}${image}`}
                alt=""
                width="100%"
            />
            <Box display="flex">
                <Box>
                    <Typography variant="p">{createdAt}</Typography>
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
            {tutorials.map(({ id, title, author, image, createdAt }) => (
                <Grid key={id} item xs={12} lg={4}>
                    <Tutorial
                        title={title}
                        author={author}
                        image={`${PUBLIC_IMAGES_BASE_URL}${image}`}
                        createdAt={formateDate(createdAt)}
                    />
                </Grid>
            ))}
        </Grid>
    </Box>
)

const AllTutorialsPage = () => {
    const { data, loading, error } = useTutorials()

    const tutorials = data?.data?.data?.docs || []
    const [tutorial] = tutorials
    console.log({ tutorial })
    return (
        <Box minHeight="100vh">
            <Container>
                <Header
                    title={tutorial?.title}
                    author={tutorial?.author}
                    createdAt={formateDate(tutorial?.createdAt)}
                    image={tutorial?.image}
                />
                <Divider />

                <Tutorials tutorials={tutorials} />
            </Container>
        </Box>
    )
}

export default AllTutorialsPage
