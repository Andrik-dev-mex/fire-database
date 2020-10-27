import React from "react";
import TableCell from "@material-ui/core/TableCell";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles((theme) => ({
  button: {
    marginLeft: "10px",
  },
  link: {
    textDecoration: "none",
    color: "white",
  },
}));

const DataCustomers = ({
  index,
  name,
  lastname,
  email,
  bussines,
  phone,
  iud,
  deleteCustomer,
}) => {
  const classes = useStyles();

  return (
    <TableRow>
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
          <Link to={`/editcustomer/${iud}`} className={classes.link}>
            Editar
          </Link>
        </Button>
        <Button
          className={classes.button}
          variant="contained"
          color="secondary"
          onClick={() => {
            deleteCustomer(iud);
          }}
        >
          Eliminar
        </Button>
      </TableCell>
      </TableRow>
  );
};

export default DataCustomers;
