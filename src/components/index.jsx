import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import CardMenu from "./CardMenu";
import {Urls} from "./../utils/urls"
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alingItems: "center",
  },
  text: {
    color: "gray",
    textAlign: "center",
  },
}));

React.useEffect(() => {

},[]);

export default function Main() {
  const classes = useStyles();
  const url = Urls();

  const data = [
    {
      url: url,
      title: "Productos",
      description: "A traves de este módulo puedes administrar tus productos",
      viewItem: "/products",
    },
    {
      url: "https://www.flaticon.com/svg/static/icons/svg/1599/1599873.svg",
      title: "Compradores",
      description: "A traves de este módulo puedes administrar tus clientes",
      viewItem: "/customers",
    },
  ];

  return (
    <div>
      <Typography variant="h2" className={classes.text}>
        Bienvenido
      </Typography>
      <div className={classes.root} container spacing={1}>
        {data.map((item) => (
          <CardMenu
            url={item.url}
            title={item.title}
            description={item.description}
            viewItem={item.viewItem}
          />
        ))}
      </div>
    </div>
  );
}
