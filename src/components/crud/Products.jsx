import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListProducts from "./ListProducts";
import Button from "@material-ui/core/Button";
import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  container: {
    display: "flex",
    margin: "10px",
    marginLeft: "10px",
    marginRight: "10px",
  },
  containerButton: {
    display: "flex",
    padding: "10px",
  },
  link: {
    textDecoration: "none",
    color: "white",
  },
}));

function Products(props) {
  const classes = useStyles();
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    products.push(product);
    setProducts([...products]);
  };

  useEffect(() => {
    const refProducts = firebase.database().ref("/products")

    refProducts.on(
      'child_added',
      snapshot => {
        const productItem = snapshot.val();
        addProduct(productItem);
      },
      error => {
        console.log(error);
        if (error.message.includes('permission_denied')) {
          props.history.push('/login');
        }
      }
    );
    // eslint-disable-next-line
  }, []);

  

  return (
    <div>
      <div className={classes.containerButton}>
        <Button variant="contained" color="primary">
          <Link to={"/addproduct"} className={classes.link}>
            Nuevo Producto
          </Link>
        </Button>
      </div>
      <div className={classes.container}>
        <List className={classes.root}>
          <ListProducts
            title={"product"}
            urlImage={"https://www.google.com"}
            nameProduct={"Product One"}
            description={"producto de prueba"}
          />
        </List>
      </div>
    </div>
  );
}

export default withRouter(Products);
