import { Box, Typography, Paper } from '@mui/material'

const Tutorial = ({ title, createdAt, image, author }) => {
    return (
        <Box sx={{ width: '100%' }}>
            <Paper>
                <img
                    style={{ display: 'block' }}
                    width="100%"
                    height="100%"
                    src={image}
                    alt={title}
                />
            </Paper>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    mt: 1,
                }}
            >
                <Typography variant="body2">{createdAt}</Typography>
                <Typography variant="body2">{author}</Typography>
            </Box>

            <Typography variant="body1" mt={1}>
                {title}
            </Typography>
        </Box>
    )
}

export default Tutorial
