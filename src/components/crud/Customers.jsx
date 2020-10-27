import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link, withRouter } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  container: {
    display: "flex",
    padding: "10px",
  },
  containerFlex: {
    display: "flex",
    padding: "15px",
    justifyContent:"flex-end",
    alignItems: "flex-end",
  },
  button: {
    textDecoration: "none",
    color: "white",
  }
});

function Customers() {
  const classes = useStyles();

  return (
    <Fragment>
      <div className={classes.containerFlex}>
        <Button variant="contained" color="primary" >
          <Link className={classes.button} to={"/addcustomer"}>Nuevo Cliente</Link>
        </Button>
      </div>
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
            <TableBody></TableBody>
          </Table>
        </TableContainer>
      </div>
    </Fragment>
  );
}

export default withRouter(Customers);