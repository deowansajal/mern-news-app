import { Box, Grid, Typography } from '@mui/material'
import { PUBLIC_IMAGES_BASE_URL } from '../../utils/constants'
import { formateDate } from '../../utils/formateDate'
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
                {tutorials.map(({ _id, title, author, image, createdAt }) => (
                    <Grid key={_id} item xs={12} md={4}>
                        <Tutorial
                            tutorialId={_id}
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
}

export default Tutorials
