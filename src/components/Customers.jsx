import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  container:{
    display: "flex",
    padding: "10px", 
  }
});

export default function Customers() { 
  const classes = useStyles();

  return(
    <div className={classes.container}>
     <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell align="right">Nombre</TableCell>
            <TableCell align="right">Apellidos</TableCell>
	    <TableCell align="right">Correo Electronico</TableCell>
            <TableCell align="right">Trabajo</TableCell>
            <TableCell align="right">Telefono</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
                  
	</TableBody>
      </Table>
    </TableContainer>
    </div>
  );

}
