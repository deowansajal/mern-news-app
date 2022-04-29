import { Box, Container, Typography, Grid } from '@mui/material'

const F1Components = () => {
    return (
        <Box id="f1-components">
            <Typography
                variant="h4"
                fontWeight={600}
                bgcolor="primary.main"
                py={10}
                textAlign="center"
                color="primary.light"
            >
                F1 Components
            </Typography>

            <Grid container spacing={3}>
                <Grid item md={6}>
                    <Box sx={{ maxWidth: 600, height: '100%', mx: 'auto' }}>
                        <Typography
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            height="100%"
                            variant="h5"
                            component="p"
                        >
                            F1 cars are complex beasts that contain many highly
                            technical and complex components that allow them to
                            achieve speeds of up to 370 kph (231 mph). We have
                            modelled components from the steering wheel to a
                            simple Pirelli tire to allow you to feel immersed
                            with some of those most mesmerising components the
                            sport has to offer. We also provide information
                            alongside each component to help educate you on
                            these parts.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item md={6}>
                    <img
                        src="/images/F1Components-LearnUsingAR.jpg"
                        width="100%"
                        alt=""
                    />
                </Grid>
            </Grid>
        </Box>
    )
}

export default F1Components
