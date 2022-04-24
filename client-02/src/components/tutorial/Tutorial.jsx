import { Box, Typography, Paper } from '@mui/material'
import { useHistory } from 'react-router-dom'

const Tutorial = ({ tutorialId, title, createdAt, image, author }) => {
    const history = useHistory()

    const handleClick = () => {
        history.push(`/tutorials/${tutorialId}`)
    }
    return (
        <Box sx={{ width: '100%' }}>
            <Paper onClick={handleClick}>
                <img
                    style={{ display: 'block', cursor: 'pointer' }}
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
                <Typography
                    variant="body2"
                    onClick={handleClick}
                    style={{ cursor: 'pointer' }}
                >
                    {createdAt}
                </Typography>
                <Typography
                    variant="body2"
                    onClick={handleClick}
                    style={{ cursor: 'pointer' }}
                >
                    {author}
                </Typography>
            </Box>

            <Typography
                variant="body1"
                mt={1}
                onClick={handleClick}
                style={{ cursor: 'pointer' }}
            >
                {title}
            </Typography>
        </Box>
    )
}

export default Tutorial
