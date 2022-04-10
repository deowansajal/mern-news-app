import { Box, Container, Typography, Button, Grid } from '@mui/material'

const F1Cars = () => {
    return (
        <Box id="f1-cars">
            <Typography
                variant="h4"
                fontWeight={600}
                bgcolor="primary.main"
                py={10}
                textAlign="center"
                color="primary.light"
            >
                F1 Cars
            </Typography>
            <Grid container>
                <Grid item md={6}>
                    <Box>
                        <img
                            src="/images/F1Cars-LearnUsingAR.jpg"
                            width="100%"
                            height="100%"
                            style={{ display: 'block' }}
                            alt=""
                        />
                    </Box>
                </Grid>
                <Grid item md={6}>
                    <Typography
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        height="100%"
                        variant="h5"
                        component="p"
                        p={5}
                    >
                        We have every car from every F1 team that is taking part
                        in the 2022 Formula 1 season. Immerse yourself within
                        the reigning champions Mercedes W13 or look at Ferraris
                        up and coming F1-75 that is expected to take the fight
                        to Mercedes. If you want to learn more about these
                        teams, we have that covered also. We provide information
                        on the teams history and most memorable achievements in
                        the sport.
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default F1Cars
