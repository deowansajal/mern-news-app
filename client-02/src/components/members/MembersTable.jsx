import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Button, Pagination, Typography } from '@mui/material'

const rows = [
    { id: 1, name: 'Snow Jon', email: 'test@tester.com' },
    { id: 2, name: 'Lannister Cersei', email: 'test@tester.com' },
    { id: 3, name: 'Lannister Jaime', email: 'test@tester.com' },
    { id: 4, name: 'Stark Arya', email: 'test@tester.com' },
    { id: 5, name: 'Targaryen Daenerys', email: 'test@tester.com' },
    { id: 7, name: 'Clifford Ferrara', email: 'test@tester.com' },
    { id: 8, name: 'Frances Rossini', email: 'test@tester.com' },
    { id: 9, name: 'Roxie Harvey', email: 'test@tester.com' },
]
export default function BasicTable() {
    return (
        <>
            <Typography variant="h3" my={5}>
                Members
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {/* <TableCell>ID</TableCell> */}
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
                                {/* <TableCell>{row.id}</TableCell> */}
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell>{row.email}</TableCell>
                                <TableCell>
                                    <Button
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
