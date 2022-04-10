import { Box, Container, Grid, Typography } from '@mui/material'
import Tutorial from '../tutorial/Tutorial'

const Tutorials = ({ tutorials }) => {
    return (
        <Box component="section">
            <Typography
                variant="h3"
                align="center"
                mt={5}
                mb={4}
                sx={{ fontWeight: 500 }}
            >
                Tutorials
            </Typography>
            <Grid container spacing={3}>
                {tutorials.map(({ id, title, author, image, date }) => (
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
}

export default Tutorials
