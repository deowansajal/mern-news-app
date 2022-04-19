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

export default function BasicTable({
    members: rows,
    handleClickDialogOpen,
    openDialog,
    handleDialogClose,
}) {
    return (
        <>
            <DialogComponent
                openDialog={openDialog}
                handleClickDialogOpen={handleClickDialogOpen}
                handleDialogClose={handleDialogClose}
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
                                <TableCell>
                                    <Button
                                        variant="contained"
                                        size="small"
                                        color="error"
                                        onClick={() => {
                                            handleClickDialogOpen()
                                        }}
                                        sx={{ mr: 3 }}
                                    >
                                        Delete
                                    </Button>
                                    <Button
                                        variant="contained"
                                        size="small"
                                        color="warning"
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
