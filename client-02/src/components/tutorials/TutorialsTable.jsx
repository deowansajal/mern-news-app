import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Button, Pagination, Typography } from '@mui/material'
import { useTutorialDelete } from '../../hooks/useTutorialDelete'
import DialogComponent from '../dialog/DialogComponent'
import { useQueryClient } from 'react-query'
import { useHistory } from 'react-router-dom'

const TutorialsTable = ({
    tutorials,
    openDialog,
    handleDialogClose,
    handleClickDialogOpen,
}) => {
    const history = useHistory()
    const [confirmSate, setConfirmSate] = React.useState('idle')

    const tutorialDeleteMutation = useTutorialDelete()

    const [tutorialId, setTutorialId] = React.useState(null)
    const queryClient = useQueryClient()

    const deleteTutorial = async tutorialId => {
        await tutorialDeleteMutation.mutateAsync(tutorialId)
        queryClient.invalidateQueries('tutorials')
    }

    // let confirmHandler = null
    // let dialogTitle = ''

    // if (confirmSate === 'deleteTutorial') {
    //     confirmHandler = deleteTutorial
    //     dialogTitle = 'Are you sure you want to delete this?'
    // }

    // if (confirmSate === 'updateTutorial') {
    //     confirmHandler = updateTutorial
    //     dialogTitle = 'Are you sure you want to make the user admin?'
    // }

    return (
        <>
            <DialogComponent
                openDialog={openDialog}
                handleClickDialogOpen={handleClickDialogOpen}
                handleDialogClose={handleDialogClose}
                confirmHandler={deleteTutorial}
                id={tutorialId}
                dialogTitle={'Are you sure you want to delete this?'}
            />
            <Typography variant="h3" my={5}>
                Tutorials
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>author</TableCell>
                            <TableCell>title</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tutorials?.map(tutorial => (
                            <TableRow
                                key={tutorial._id}
                                sx={{
                                    '&:last-child td, &:last-child th': {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    {tutorial.author?.name}
                                </TableCell>
                                <TableCell>{tutorial.title}</TableCell>
                                <TableCell>
                                    {new Date(
                                        tutorial.createdAt
                                    ).toLocaleDateString()}
                                </TableCell>
                                <TableCell>
                                    <Button
                                        onClick={() => {
                                            setTutorialId(tutorial._id)
                                            handleClickDialogOpen()
                                        }}
                                        variant="contained"
                                        size="small"
                                        color="error"
                                        sx={{ mr: 3 }}
                                    >
                                        Delete
                                    </Button>
                                    <Button
                                        variant="contained"
                                        size="small"
                                        color="warning"
                                        onClick={() => {
                                            history.push(
                                                `admin/updateTutorial/${tutorial._id}`
                                            )
                                        }}
                                    >
                                        Update
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Pagination count={10} sx={{ mt: 5 }} />
        </>
    )
}

export default TutorialsTable
