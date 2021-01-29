import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Chip from '@material-ui/core/Chip';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import DoneIcon from '@material-ui/icons/Done';
import {
  RemoveRedEye as RemoveRedEyeIcon,
} from "@material-ui/icons";

import {
  Box,
  IconButton,
} from "@material-ui/core";


const columns = [
  { id: 'contract_title', label: 'Contract Title', minWidth: 100 },
  { id: 'contract_status', label: 'Contract Status', minWidth: 100 },
  {
    id: 'supplier_name',
    label: 'Supplier Name',
    minWidth: 100,
  },
  {
    id: 'contract_expiry',
    label: 'Expiry Date',
    minWidth: 100,
  },
  {
    id: 'contract_owner',
    label: 'Contract Owner',
    minWidth: 100,
  },
  {
    id: 'contact_information',
    label: 'Contact Information',
    minWidth: 100,
  },
  {
    id: 'details',
    label: 'Details',
    minWidth: 100,
  },
];



const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
  tableHead: {
    color: "#fff",
  },
  active: {
    backgroundColor:"#4CAF50",
    color:"#fff",
  },
  inactive: {
    backgroundColor:"#F44336",
    color:"#fff",
  },
  pending: {
    backgroundColor:"#F44336",
    color:"#fff",
  },
  icon:{
    color: '#fff',
  },
  customTable: {
    "& .MuiTableCell-stickyHeader": {
      backgroundColor: "#4782DA" 
    }
  },
});



const ContractListTable = ({rows, count, rowsPerPage,setRowsPerPage, page, setPage}) => {
  const classes = useStyles();
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    console.log(event.target.value);
    setRowsPerPage(event.target.value);
    setPage(0);
  };
  console.log(rowsPerPage);
  
  console.log('Here are the rows i am getting', rows);
  console.log("Here is my status", rows.contract_status)

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table" classes={{root: classes.customTable}}>
          <TableHead className={classes.tableHead}  >
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, color: "#fff", }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              return (
                <TableRow key={row.id}>
              <TableCell scope="row">
                {row.contract_title}
              </TableCell>
              <TableCell scope="row">
                {row.contract_status === "active" && (
                          <Chip
                          label="Active"
                          className={classes.active}
                          size="small"
                            mr={1}
                            mb={1}
                            icon={<DoneIcon className={classes.icon} />}
                        />
                        )}
                        {row.contract_status === "terminated" && (
                          <Chip
                          icon={<HighlightOffIcon className={classes.icon} />}
                          label="Inactive"
                          className={classes.inactive}
                          size="small"
                            mr={1}
                            mb={1}
                        />
                        )}
                        {row.contract_status === "pending" && (
                          <Chip
                          icon={<HighlightOffIcon className={classes.icon} />}
                          label="Pending"
                          className={classes.pending}
                          size="small"
                            mr={1}
                            mb={1}
                        />
                        )}
                        
              </TableCell>
              
              <TableCell style={{ width: 160 }} align="left">
                {row.supplier_name}
              </TableCell>
              <TableCell style={{ width: 160 }} align="left">
                {row.contract_expiry}
              </TableCell>
              <TableCell style={{ width: 160 }} align="left">
                {row.contract_owner.first_name}
              </TableCell>
              <TableCell style={{ width: 300 }} align="left">
                {row.supplier_contact_email}<br />
                {row.supplier_contact_phone}<br />
                {row.supplier_street_address}<br />
                {row.supplier_state} <br />
                {row.supplier_city}, {row.supplier_country}
              </TableCell>
              <TableCell style={{ width: 100 }} align="center">
                  <Box mr={2}>
                      <IconButton aria-label="details">
                          <RemoveRedEyeIcon />
                      </IconButton>
                  </Box>
              </TableCell>
              
            </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 50]}
        component="div"
        count={count}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default ContractListTable;