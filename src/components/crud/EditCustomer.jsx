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

const EditCustomer = (props) => {
  const classes = useStyles();
  const [customer, setCustomer] = useState({
    name: "",
    lastname: "",
    email: "",
    job: "",
    phone: "",
  });

  const { uid } = props.match.params;

  const handleSubmit = (e) => {
    e.preventDefault();
    customerEdit(uid);
  };

  const customerEdit = (id) => {
    const refCustomerUpdate = firebase.database().ref(`/customers/${id}`);
    refCustomerUpdate
      .update(customer)
      .then((snapshot) => {
          props.history.push("/customers");
      })
      .catch((error) => {
        console.log(error);
        if (error.message.includes("permission_denied")) {
          props.history.push("/login");
        }
      });
  };

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    firebase
      .database()
      .ref(`/customers/${uid}`)
      .once("value")
      .then((snapshot) => {
        setCustomer(snapshot.val());
      })
      .catch((error) => {
        console.log(error);
        if (error.message.includes("permission_denied")) {
          props.history.push("/login");
        }
      });
      //eslint-disable-next-line
  }, []);

  console.log(customer);
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
            value={customer.name}
            onChange={handleChange}
          />
          <TextField
            name="lastname"
            label="Apellidos"
            variant="outlined"
            className={classes.fields}
            value={customer.lastname}
            onChange={handleChange}
          />
          <TextField
            name="email"
            label="Correo Electronico"
            variant="outlined"
            className={classes.fields}
            value={customer.email}
            onChange={handleChange}
          />
        </div>
        <div className={classes.container}>
          <TextField
            name="job"
            label="Trabajo"
            variant="outlined"
            value={customer.job}
            onChange={handleChange}
          />
          <TextField
            name="phone"
            label="Telefono"
            variant="outlined"
            className={classes.fields}
            value={customer.phone}
            onChange={handleChange}
          />
        </div>
        <div className={classes.container}>
          <Button type="submit" variant="contained" color="primary">
            Guardar
          </Button>
        </div>
      </form>
    </Fragment>
  );
};

export default withRouter(EditCustomer);
