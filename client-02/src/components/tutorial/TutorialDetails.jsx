import { Typography, Box, Container } from '@mui/material'

const TutorialDetails = ({ title, description, image }) => {
    return (
        <Container>
            <Box mt={10}>
                <Typography variant="h3" textAlign="center" mb={5}>
                    {title}
                </Typography>
                <Box maxWidth="960px" mx="auto" my={5}>
                    <img src="/images/ar.png" width="100%" alt="Titus" />
                </Box>

                <Typography fontSize="1.4rem" component="p">
                    {description}
                </Typography>
            </Box>
        </Container>
    )
}

export default TutorialDetails
