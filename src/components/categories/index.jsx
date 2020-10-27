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

export default function Main(props) {
  const classes = useStyles();
  const [data, setData] = useState([]);

  const addData = value => {
    data.push(value);

    setData([...data]);
  };

  useEffect(() => {
    const refCategories = firebase.database().ref("/categories");

    refCategories.on('child_added',
      snapshot => {
        const categories = snapshot.val();

        addData(categories);
      },
      error => {
        console.log(error);
        if (error.message.includes('permission_denied')) {
          props.history.push('/login');
        }
      }
    )
    //eslint-disable-next-line
  },[]);


  console.log(data);
  
  return (
    <div>
      <Typography variant="h2" className={classes.text}>
        Bienvenido
      </Typography>
      <div className={classes.root} container spacing={1}>
        {
          data && data.map(item => (
            <CardMenu
              url = {item.urlImage}
              title={item.title}
              description ={item.description}
              viewItem={item.viewItem}
            />
          ))
        }
      </div>
    </div>
  );
}
