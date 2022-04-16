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
    { id: 1, author: 'Snow Jon', tittle: 'test@tester.com' },
    { id: 2, author: 'Lannister Cersei', tittle: 'test@tester.com' },
    { id: 3, author: 'Lannister Jaime', tittle: 'test@tester.com' },
    { id: 4, author: 'Stark Arya', tittle: 'test@tester.com' },
    { id: 5, author: 'Targaryen Daenerys', tittle: 'test@tester.com' },
    { id: 7, author: 'Clifford Ferrara', tittle: 'test@tester.com' },
    { id: 8, author: 'Frances Rossini', tittle: 'test@tester.com' },
    { id: 9, author: 'Roxie Harvey', tittle: 'test@tester.com' },
]
export default function TutorialsTable() {
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
                            <TableCell>tittle</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow
                                key={row.author}
                                sx={{
                                    '&:last-child td, &:last-child th': {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.author}
                                </TableCell>
                                <TableCell>{row.tittle}</TableCell>
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
