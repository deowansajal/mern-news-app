import React from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'

const AddTutorialForm = ({ title, content }) => {
    const [fileName, setFileName] = React.useState('')
    const [file, setFile] = React.useState(null)
    return (
        <Box component="form" width="100%">
            <TextField label="Tutorial title" fullWidth sx={{ mb: 3 }} />
            <TextField label="Tutorial Content" fullWidth multiline rows={7} />
            <Box display="flex" mt={3}>
                <Button variant="contained" component="label">
                    Choose File
                    <input
                        type="file"
                        hidden
                        onChange={e => {
                            setFileName(e.target.files[0].name)
                        }}
                    />
                </Button>
                <Typography borderBottom="solid 1px rgba(0,0,0,.5)" ml={2}>
                    {fileName}
                </Typography>
            </Box>
            <Button
                variant="contained"
                size="large"
                fullWidth
                sx={{ mt: 2 }}
                color="secondary"
                display="block"
            >
                Submit
            </Button>
        </Box>
    )
}

export default AddTutorialForm
