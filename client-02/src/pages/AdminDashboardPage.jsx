import * as React from 'react'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import { Card, CardContent } from '@mui/material'
import Divider from '@mui/material/Divider'

import { AccountCircle, Article } from '@mui/icons-material'
import AdminDrawer from '../components/layouts/AdminDrawer'
import MembersTable from '../components/members/MembersTable'
import TutorialsTable from '../components/tutorials/TutorialsTable'
import DialogComponent from '../components/dialog/DialogComponent'

import { useUsers } from '../hooks/useUsers'
import { useUtils } from '../hooks/useUtils'
import { useTutorials } from '../hooks/useTutorials'
import { useQueryClient } from 'react-query'
import { useUserDelete, useUserMakeAdmin } from '../hooks/useUsers'
import { useTutorialDelete } from '../hooks/useTutorialDelete'
import {
    DELETE_USER,
    DELETE_TUTORIAL,
    UPDATE_USER_ROLE,
} from '../utils/constants'

const DashboardContent = () => {
    const queryClient = useQueryClient()
    const [membersPage, setMembersPage] = React.useState(0)
    const [tutorialsPage, setTutorialsPage] = React.useState(0)
    const [confirmState, setConfirmState] = React.useState('idle')
    const [userId, setUserId] = React.useState(null)
    const [tutorialId, setTutorialId] = React.useState(null)

    const { openDialog, handleDialogClose, handleClickDialogOpen } = useUtils()
    const [open, setOpen] = React.useState(true)

    const { data: users } = useUsers(membersPage)
    const { data: tutorials } = useTutorials(tutorialsPage)

    const { mutateAsync: userDelete } = useUserDelete()
    const { mutateAsync: userUpdate } = useUserMakeAdmin()
    const { mutateAsync: tutorialDelete } = useTutorialDelete()

    const totalMembers = users?.data?.data?.totalDocs
    const totalTutorials = tutorials?.data?.data?.totalDocs

    const toggleDrawer = () => {
        setOpen(!open)
    }

    const deleteUser = async () => {
        await userDelete(userId)

        queryClient.invalidateQueries('users')
    }

    const updateUserRole = async () => {
        await userUpdate(userId)
        queryClient.invalidateQueries('users')
    }

    const deleteTutorial = async () => {
        await tutorialDelete(tutorialId)
        queryClient.invalidateQueries('tutorials')
    }

    let confirmHandler = () => {}
    if (confirmState === DELETE_USER) {
        confirmHandler = deleteUser
    } else if (confirmState === UPDATE_USER_ROLE) {
        confirmHandler = updateUserRole
    } else if (confirmState === DELETE_TUTORIAL) {
        confirmHandler = deleteTutorial
    }

    return (
        <Box>
            <AdminDrawer open={open} toggleDrawer={toggleDrawer} />
            <DialogComponent
                openDialog={openDialog}
                handleClickDialogOpen={handleClickDialogOpen}
                handleDialogClose={handleDialogClose}
                confirmHandler={confirmHandler}
                dialogTitle={'Are you sure you want to delete this?'}
            />
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    minHeight: '100vh',
                    marginLeft: open ? '240px' : '55px',
                    transition: 'margin-left 0.5s',
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
                                            {totalMembers}
                                        </Typography>
                                        <AccountCircle
                                            sx={{
                                                fontSize: 60,
                                                color: '#777',
                                            }}
                                        />
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
                                            {totalTutorials}
                                        </Typography>
                                        <Article
                                            sx={{ fontSize: 60, color: '#777' }}
                                        />
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
                                members={users?.data?.data?.docs || []}
                                updateUserRole={updateUserRole}
                                openDialog={openDialog}
                                handleDialogClose={handleDialogClose}
                                handleClickDialogOpen={handleClickDialogOpen}
                                setConfirmState={setConfirmState}
                                setUserId={setUserId}
                                handlePaginationChange={(event, page) => {
                                    setMembersPage(page)
                                }}
                                paginate={{
                                    page: membersPage,
                                    totalPages: users?.data?.data?.totalPages,
                                }}
                            />
                        </Grid>
                        <Divider />
                        <Grid item xs={12}>
                            <TutorialsTable
                                tutorials={tutorials?.data?.data.docs}
                                openDialog={openDialog}
                                handleDialogClose={handleDialogClose}
                                handleClickDialogOpen={handleClickDialogOpen}
                                setTutorialId={setTutorialId}
                                setConfirmState={setConfirmState}
                                paginate={{
                                    page: tutorialsPage,
                                    totalPages:
                                        tutorials?.data?.data?.totalPages,
                                }}
                                handlePaginationChange={(event, page) => {
                                    setTutorialsPage(page)
                                }}
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
