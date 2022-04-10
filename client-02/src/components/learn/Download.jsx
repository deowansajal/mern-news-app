import { Box, Container, Typography, Button } from '@mui/material'

const Download = () => {
    return (
        <Box
            id="download"
            component="section"
            my={6}
            sx={{ textAlign: 'center', maxWidth: 720, mx: 'auto' }}
        >
            <Typography variant="h4" fontWeight={600} mb={3}>
                Download The F1 Guide's AR App
            </Typography>
            <Typography variant="body1" component="p">
                Free and built on modern technology The F1 Guide Augmented
                Reality Experience offers a new and unique experience that
                cannot be found on any other F1 related site
            </Typography>
            <Typography
                component="strong"
                fontWeight={600}
                textTransform="uppercase"
                display="inline-block"
                mt={3}
            >
                Note:
            </Typography>
            <Typography mb={3}>
                As this is an Augmented Reality application this is only
                available to download on mobile devices
            </Typography>
            <Button variant="contained" color="secondary" size="large">
                Download version 1.0
            </Button>
        </Box>
    )
}

export default Download
