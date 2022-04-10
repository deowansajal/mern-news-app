import { Box } from '@mui/material'

const BgOverlayImage = ({ height, bgImage, children, styles = {} }) => {
    return (
        <Box
            sx={{
                height: height || '65vh',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                backgroundImage: `url(${bgImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                '&::before': {
                    content: '""',
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    backgroundColor: 'rgba(0,0,0,0.6)',
                    top: 0,
                    left: 0,
                },
                ...styles,
            }}
        >
            {children}
        </Box>
    )
}

export default BgOverlayImage
