import React from 'react'
import {
    Box,
    Container,
    Typography,
    Grid,
    Divider,
    Pagination,
} from '@mui/material'

import Tutorial from '../components/tutorial/Tutorial'
import { useTutorials } from '../hooks/useTutorials'

import { formateDate } from '../utils/formateDate'

const Header = ({ title, author, createdAt, image }) => {
    return (
        <Box mt={15} component="header" mb={10}>
            <Typography variant="h2" textAlign="center" mb={5}>
                {title}
            </Typography>
            <img src={image} alt={title} width="100%" />
            <Box display="flex">
                <Box>
                    <Typography variant="p">{createdAt}</Typography>
                    <Typography variant="body2">{author?.name}</Typography>
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
            {tutorials.map(({ _id, title, author, image, createdAt }) => (
                <Grid key={_id} item xs={12} lg={4} sm={6}>
                    <Tutorial
                        tutorialId={_id}
                        title={title}
                        author={author}
                        image={image}
                        createdAt={formateDate(createdAt)}
                    />
                </Grid>
            ))}
        </Grid>
    </Box>
)

const AllTutorialsPage = () => {
    const [tutorialsPage, setTutorialsPage] = React.useState(0)

    const { data, loading, error } = useTutorials(tutorialsPage)

    const tutorials = data?.data?.data?.docs || []

    const [tutorial] = tutorials
    return (
        <Box minHeight="100vh" mb={4}>
            <Container>
                <Header
                    title={tutorial?.title}
                    author={tutorial?.author}
                    createdAt={
                        tutorial?.createdAt && formateDate(tutorial.createdAt)
                    }
                    image={tutorial?.image}
                />
                <Divider />

                <Tutorials tutorials={tutorials} />

                {tutorials.length > 0 && (
                    <Pagination
                        count={data?.data?.data?.totalPages}
                        page={tutorialsPage}
                        sx={{ mt: 5 }}
                        onChange={(event, page) => {
                            setTutorialsPage(page)
                        }}
                    />
                )}
            </Container>
        </Box>
    )
}

export default AllTutorialsPage
