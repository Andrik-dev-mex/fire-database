import React, { Fragment, useEffect, useState } from "react";
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
import DataCustomers from "./DataCustomers";
import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

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
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  button: {
    textDecoration: "none",
    color: "white",
  },
});

function Customers(props) {
  const classes = useStyles();
  const [customers, setCustomers] = useState([]);

  const addCustomers = (newCustomer) => {
    customers.push(newCustomer);

    setCustomers([...customers]);
  };

  useEffect(() => {
    const refCustomers = firebase.database().ref("/customers");

    refCustomers.on(
      "child_added",
      (snapshot) => {
        const key = snapshot.key()
        const newCustomer = snapshot.val();
        addCustomers(newCustomer);
        console.log(key);
      },
      (error) => {
        console.log(error);
        if (error.message.includes("permission_denied")) {
          props.history.push("/login");
        }
      }
    );
  }, []);
  return (
    <Fragment>
      <div className={classes.containerFlex}>
        <Button variant="contained" color="primary">
          <Link className={classes.button} to={"/addcustomer"}>
            Nuevo Cliente
          </Link>
        </Button>
      </div>
      <div className={classes.container}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell align="center">Nombre</TableCell>
                <TableCell align="center">Apellidos</TableCell>
                <TableCell align="center">Correo Electronico</TableCell>
                <TableCell align="center">Trabajo</TableCell>
                <TableCell align="center">Telefono</TableCell>
                <TableCell align="center">Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                {customers.map((customer, index) => (
                  <DataCustomers
                    index={index + 1}
                    name={customer.name}
                    iud = {customer.id}
                    lastname={customer.lastname}
                    email={customer.email}
                    bussines={customer.job}
                    phone={customer.phone}
                  />
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Fragment>
  );
}

export default withRouter(Customers);
