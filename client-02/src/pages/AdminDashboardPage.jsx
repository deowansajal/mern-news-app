import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import { Card, CardContent } from '@mui/material'
import Divider from '@mui/material/Divider'

import { AccountCircle, Article } from '@mui/icons-material'
import AdminTopBar from '../components/layouts/AdminTopBar'
import AdminDrawer from '../components/layouts/AdminDrawer'
import MembersTable from '../components/members/MembersTable'
import TutorialsTable from '../components/tutorials/TutorialsTable'
import { useUsers, useUserDelete } from '../hooks/useUsers'
import { useUtils } from '../contexts/UtilsContext'

// import { useMutation } from 'react-query'
import { API } from '../api'
import { useTutorials } from '../hooks/useTutorials'
import { useTutorialDelete } from '../hooks/useTutorialDelete'

const DashboardContent = () => {
    const [open, setOpen] = React.useState(true)
    const { data } = useUsers()
    const { data: tutorials } = useTutorials()
    const { openDialog, handleDialogClose, handleClickDialogOpen } = useUtils()
    const toggleDrawer = () => {
        setOpen(!open)
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AdminTopBar color="secondary" open={open} />
            <AdminDrawer open={open} toggleDrawer={toggleDrawer} />

            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    height: '100vh',
                    overflow: 'auto',
                }}
            >
                <Toolbar />
                <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                    <Grid container spacing={3} mb={5}>
                        <Grid item xs={8} md={4}>
                            <Card>
                                <CardContent>
                                    <Box
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="space-between"
                                        mb={2}
                                    >
                                        <Typography variant="h3" component="h4">
                                            50
                                        </Typography>
                                        <AccountCircle sx={{ fontSize: 60 }} />
                                    </Box>
                                    <Typography
                                        variant="h4"
                                        component="h4"
                                        fontWeight={300}
                                    >
                                        Members
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={8} md={4}>
                            <Card>
                                <CardContent>
                                    <Box
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="space-between"
                                        mb={2}
                                    >
                                        <Typography variant="h3" component="h4">
                                            10
                                        </Typography>
                                        <Article sx={{ fontSize: 60 }} />
                                    </Box>
                                    <Typography
                                        variant="h4"
                                        component="h4"
                                        fontWeight={300}
                                    >
                                        Tutorials
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <MembersTable
                                members={data?.data?.data?.docs || []}
                                openDialog={openDialog}
                                handleDialogClose={handleDialogClose}
                                handleClickDialogOpen={handleClickDialogOpen}
                                // deleteUser={deleteUser}
                            />
                        </Grid>
                        <Divider />
                        <Grid item xs={12}>
                            <TutorialsTable
                                tutorials={tutorials?.data?.data.docs}
                                openDialog={openDialog}
                                handleDialogClose={handleDialogClose}
                                handleClickDialogOpen={handleClickDialogOpen}
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    )
}

const AdminDashboardPage = () => {
    return <DashboardContent />
}

export default AdminDashboardPage
