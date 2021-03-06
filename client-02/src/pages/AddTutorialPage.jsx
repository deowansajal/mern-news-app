import { Typography, Box } from '@mui/material'
import React from 'react'
import AdminDrawer from '../components/layouts/AdminDrawer'
import AddTutorialForm from '../components/tutorials/AddTutorialForm'

const AddTutorialPage = () => {
    const [open, setOpen] = React.useState(true)
    const toggleDrawer = () => {
        setOpen(!open)
    }
    return (
        <Box sx={{ display: 'flex' }}>
            <AdminDrawer open={open} toggleDrawer={toggleDrawer} />
            <Box
                width="90%"
                maxWidth={600}
                height="calc(100vh - 146.6px)"
                display="flex"
                flexDirection="column"
                justifyItems="center"
                justifyContent="center"
                mx="auto"
            >
                <Box mb={5} textAlign="center">
                    <Typography variant="h2" component="h1">
                        Add Tutorial
                    </Typography>
                    <Typography variant="p" component="p">
                        Please fill out the fields below and click post to
                        publish a
                        <br />
                        tutorial to the website
                    </Typography>
                </Box>

                <AddTutorialForm />
            </Box>
        </Box>
    )
}

export default AddTutorialPage
