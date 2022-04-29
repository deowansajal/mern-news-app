import { Box, Typography } from '@mui/material'

const WhoAreWe = () => {
    return (
        <Box component="section" mt={5}>
            <Box sx={{ textAlign: 'center', maxWidth: '660px', m: 'auto' }}>
                <Typography variant="h3" align="center" mb={4} fontWeight={500}>
                    Who are we ?
                </Typography>

                <img
                    width={100}
                    src="/images/who-are-we-icon.png"
                    alt="Who are we?"
                />

                <Typography mt={4} variant="body1">
                    Here at The F1 Guide we are dedicated to helping and
                    educating F1 fans. We know the sport is very complex. While
                    there is some good learning material on the internet, there
                    isn't a centralised place like ours anywhere on the
                    internet. Also using the power of Augmented reality we offer
                    a free free and new way to learn about F1 in a fun and
                    immerse way.
                </Typography>
            </Box>
        </Box>
    )
}

export default WhoAreWe
