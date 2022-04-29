import React from 'react'

import {
    Button,
    Pagination,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from '@mui/material'

import { DELETE_USER } from '../../utils/constants'

const MembersTable = ({
    members: rows,
    handleClickDialogOpen,
    handlePaginationChange,
    setConfirmSate,
    setUserId,
    paginate,
}) => {
    return (
        <>
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
                                            setConfirmSate(DELETE_USER)
                                            setUserId(row._id)
                                            handleClickDialogOpen()
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

export default MembersTable
