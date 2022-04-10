import { Box, Typography, Card, Grid, CardContent } from '@mui/material'

const services = [
    {
        title: 'Expertly written tutorials',
        body: `At The F1 guide we write well written tutorials that
        try to reach out to new fans specifically. We explain everything 
        that will help new fans the most complex of issues in the sport.`,
        image: '/images/page-icon.png',
    },
    {
        title: 'Well crafted short Videos',
        body: `We also produce videos! Available on The F1 Guide's
        YouTube channel we have short simple videos for
        fans that prefer to learn from videos.`,
        image: '/images/video-icon.png',
    },
    {
        title: 'Augmented Reality',
        body: `Using the power of Augmented Reality we
        provide an immersive platform to allow F1 fans to
        experience all aspects of the sport in
        a real world environment`,
        image: '/images/ar-icon.png',
    },
]

const HowCanWeHelp = () => {
    return (
        <Box component="section" my={5}>
            <Typography
                variant="h3"
                align="center"
                mb={4}
                sx={{ fontWeight: 500 }}
            >
                How WE can help?
            </Typography>

            <Grid container spacing={4} alignItems="stretch">
                {services.map(({ title, body, image }, index) => (
                    <Grid
                        item
                        md={4}
                        sm={6}
                        sx={{ display: 'flex' }}
                        key={index}
                    >
                        <Card
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                flexDirection: 'column',
                            }}
                        >
                            <CardContent>
                                <Box
                                    sx={{
                                        textAlign: 'center',
                                        my: 2,
                                    }}
                                >
                                    <img
                                        width={100}
                                        src={image}
                                        alt="Who are we?"
                                    />
                                </Box>

                                <Box sx={{ textAlign: 'center' }}>
                                    <Typography mb={2} variant="h6">
                                        {title}
                                    </Typography>
                                    <Typography variant="body2">
                                        {body}
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default HowCanWeHelp
