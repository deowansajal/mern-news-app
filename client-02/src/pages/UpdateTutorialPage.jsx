import React from 'react'
import { useParams } from 'react-router-dom'

import { Typography, Box } from '@mui/material'

import UpdateTutorialForm from '../components/tutorials/UpdateTutorialForm'
import AdminDrawer from '../components/layouts/AdminDrawer'

const UpdateTutorialPage = () => {
    const [open, setOpen] = React.useState(true)
    const toggleDrawer = () => {
        setOpen(!open)
    }
    const { tutorialId } = useParams()
    return (
        <Box display="flex">
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
                        Update Tutorial
                    </Typography>
                    <Typography variant="p" component="p">
                        Please fill out the fields below and click post to
                        publish a
                        <br />
                        tutorial to the website
                    </Typography>
                </Box>

                <UpdateTutorialForm tutorialId={tutorialId} />
            </Box>
        </Box>
    )
}

export default UpdateTutorialPage
