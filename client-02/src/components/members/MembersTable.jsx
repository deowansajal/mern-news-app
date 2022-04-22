import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Button, Pagination, Typography } from '@mui/material'
import DialogComponent from '../dialog/DialogComponent'
import { useUserDelete, useUserMakeAdmin } from '../../hooks/useUsers'
import { useQueryClient } from 'react-query'

export default function BasicTable({
    members: rows,
    handleClickDialogOpen,
    openDialog,
    handleDialogClose,
}) {
    const [userId, setUserId] = React.useState(null)
    const queryClient = useQueryClient()
    const [confirmSate, setConfirmSate] = React.useState('idle')

    const userDeleteMutation = useUserDelete()
    const userRoleUpdateMutation = useUserMakeAdmin()

    const deleteUser = async userId => {
        await userDeleteMutation.mutateAsync(userId)

        queryClient.invalidateQueries('users')
    }

    const updateUserRole = async userId => {
        await userRoleUpdateMutation.mutateAsync(userId)

        queryClient.invalidateQueries('users')
    }

    let confirmHandler = null
    let dialogTitle = ''

    if (confirmSate === 'deleteUser') {
        confirmHandler = deleteUser
        dialogTitle = 'Are you sure you want to delete this?'
    }

    if (confirmSate === 'makeAdmin') {
        confirmHandler = updateUserRole
        dialogTitle = 'Are you sure you want to make the user admin?'
    }

    return (
        <>
            <DialogComponent
                openDialog={openDialog}
                handleClickDialogOpen={handleClickDialogOpen}
                handleDialogClose={handleDialogClose}
                confirmHandler={confirmHandler}
                id={userId}
                dialogTitle={dialogTitle}
            />
            <Typography variant="h3" my={5}>
                Members
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Role</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow
                                key={row.name}
                                sx={{
                                    '&:last-child td, &:last-child th': {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell>{row.email}</TableCell>
                                <TableCell>{row.role}</TableCell>
                                <TableCell>
                                    <Button
                                        disabled={row.role === 'admin'}
                                        variant="contained"
                                        size="small"
                                        color="error"
                                        onClick={() => {
                                            setConfirmSate('deleteUser')

                                            handleClickDialogOpen()
                                            setUserId(row._id)
                                        }}
                                        sx={{ mr: 3 }}
                                    >
                                        Delete
                                    </Button>
                                    <Button
                                        disabled={row.role === 'admin'}
                                        variant="contained"
                                        size="small"
                                        color="warning"
                                        onClick={() => {
                                            setConfirmSate('makeAdmin')
                                            handleClickDialogOpen()

                                            setUserId(row._id)
                                        }}
                                    >
                                        Make Admin
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
