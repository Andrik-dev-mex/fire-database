import React, { Fragment, useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      width: "100%",
    },
    container: {
      display: "flex",
      padding: "15px",
      justifyContent: "center",
      alignItems: "center",
    },
    fields: {
      marginLeft: "5px",
    },
  };
});

const EditCustomer = () => {
  const classes = useStyles();
  const [customer, setCustomer] = useState({
    name:"",
    lastname:"",
    email: "",
    job: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    customerEdit();
  };

  const customerEdit = () => {

  }

  const handleChange =(e) => {

  };

  useEffect(() => {
    firebase.database().ref("/customers")
    .once('value')
    .then(snapshot => {

    })
  },[]);

  return (
    <Fragment>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div className={classes.container}>
          <TextField
            name="name"
            label="Nombre"
            variant="outlined"
            defaultValue={customer.name}
            onChange={handleChange}
          />
          <TextField
            name="lastname"
            label="Apellidos"
            variant="outlined"
            className={classes.fields}
            defaultValue={customer.lastname}
            onChange={handleChange}
          />
          <TextField
            name="email"
            label="Correo Electronico"
            variant="outlined"
            className={classes.fields}
            defaultValue={customer.email}
            onChange={handleChange}
          />
        </div>
        <div className={classes.container}>
          <TextField
            name="job"
            label="Trabajo"
            variant="outlined"
            defaultValue={customer.job}
            onChange={handleChange}
          />
          <TextField
            name="phone"
            label="Telefono"
            variant="outlined"
            className={classes.fields}
            defaultValue={customer.phone}
            onChange={handleChange}
          />
        </div>
        <div className={classes.container}>
          <Button type={"submit"} variant="contained" color="primary">
            Guardar
          </Button>
        </div>
      </form>
    </Fragment>
  );
};

export default withRouter(EditCustomer);
