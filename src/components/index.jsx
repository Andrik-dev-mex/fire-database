import React, {useEffect, useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import CardMenu from "./CardMenu";
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

export default function Main() {
  const classes = useStyles();
  const [data, setData] = useState([]);

  useEffect(() => {
    firebase
    .database()
    .once('value')
    .then(res => {console.log(res)})
  })
  
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
