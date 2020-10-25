import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  inline: {
    display: "inline",
  },
  button: {
    marginRight: "5px"
  }
}));


export default function ListProducts({ title, urlImage, nameProduct, description }) {
  const classes = useStyles();

  return (
    <div>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={title} src={urlImage} />
        </ListItemAvatar>
        <ListItemText
          primary={nameProduct}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {description}
              </Typography>
            </React.Fragment>
          }
        />
        <ListItemSecondaryAction>
          <Button variant="contained" color="default" className={classes.button}>
            Actualizar
          </Button>
          <Button variant="contained" color="default">
            Eliminar
          </Button>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider variant="inset" component="li" />
      </div>
  );
};

