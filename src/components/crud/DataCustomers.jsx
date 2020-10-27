import React, { Fragment } from "react";
import TableCell from "@material-ui/core/TableCell";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  button: {
    marginLeft: "10px",
  },
  link: {
    textDecoration: "none",
    color: "white",
  },
}));

const DataCustomers = ({ index, name, lastname, email, bussines, phone, iud }) => {
  const classes = useStyles();

  return (
    <Fragment>
      <TableCell component="th" scope="row">
        {index}
      </TableCell>
      <TableCell align="center">{name}</TableCell>
      <TableCell align="center">{lastname}</TableCell>
      <TableCell align="center">{email}</TableCell>
      <TableCell align="center">{bussines}</TableCell>
      <TableCell align="center">{phone}</TableCell>
      <TableCell align="center">
        <Button variant="contained" color="primary">
          <Link to={`/editcustomer/${iud}`}>Editar</Link>
        </Button>
        <Button
          className={classes.button}
          variant="contained"
          color="secondary"
        >
          Eliminar
        </Button>
      </TableCell>
    </Fragment>
  );
};

export default DataCustomers;
