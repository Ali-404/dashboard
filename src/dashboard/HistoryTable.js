import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {  IconButton } from '@mui/material';
import {  FaTrash } from 'react-icons/fa6';
import { useSelector } from 'react-redux';


export default function HistoryTable() {

  const {currency, rate} = useSelector(state => state.currency)
  const {history} = useSelector(state => state.sold)
  const sortedHistory = [...history].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (

      <TableContainer component={Paper} sx={{boxShadow: "none",borderRadius:5}}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell >Raison</TableCell>
              <TableCell >Amount</TableCell>
              <TableCell >Date</TableCell>
              {/* <TableCell ></TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedHistory.map((row, key) => (
              <TableRow
                key={key}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                className={ row.type === "outcome" ?  '*:bg-[#dd3369] ' : "bg-[#4aad9b]"}
              >
                <TableCell component="th" scope="row">
                  {row.raison}
                </TableCell>
                <TableCell  >{row.type === "income" ? "+ " + (row.amount * rate).toFixed(2) : "- " + (row.amount * rate).toFixed(2)} {currency}</TableCell>
                <TableCell >{row.date}</TableCell>
                {/* <TableCell align="right">
                  <IconButton size='small' variant='contained'  >
                      <FaTrash size={14} />
                  </IconButton>
                </TableCell>
         */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>



  );
}
