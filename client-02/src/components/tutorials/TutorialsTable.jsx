import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Button, Pagination, Typography } from '@mui/material'
import { useHistory } from 'react-router-dom'
import { DELETE_TUTORIAL } from '../../utils/constants'

import { formateDate } from '../../utils/formateDate'

const TutorialsTable = ({
    tutorials,

    handleClickDialogOpen,
    handlePaginationChange,
    paginate,
    setTutorialId,
    setConfirmState,
}) => {
    const history = useHistory()

    return (
        <>
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
                                    {formateDate(tutorial.createdAt)}
                                </TableCell>
                                <TableCell>
                                    <Button
                                        onClick={() => {
                                            setTutorialId(tutorial._id)
                                            setConfirmState(DELETE_TUTORIAL)
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
            {
                <Pagination
                    count={paginate.totalPages}
                    page={paginate.page}
                    sx={{ mt: 5 }}
                    onChange={handlePaginationChange}
                />
            }
        </>
    )
}

export default TutorialsTable
