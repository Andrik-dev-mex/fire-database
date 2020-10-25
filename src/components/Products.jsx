import React from "react";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListProducts from "./ListProducts";
import Button from "@material-ui/core/Button";

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
}));

function Products() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.containerButton}>
        <Button variant="contained" color="primary">
          Nuevo Producto
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
