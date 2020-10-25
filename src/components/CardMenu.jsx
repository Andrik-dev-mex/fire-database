import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, CardActions, Button } from "@material-ui/core";
import { Card, CardActionArea, CardMedia } from "@material-ui/core";
import { CardContent } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 345,
    margin: "15px",
  },
  media: {
    height: 180,
  },
  text: {
    textAlign: "center",
  },
  link: {
    textDecoration: "none",
    color:"white",
  },
}));

export default function CardMenu({ url, title, description, viewItem }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.media} image={url} title={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" variant="contained" color="primary" onClick={viewItem}>
          <Link to={viewItem} className={classes.link} >Ver</Link>
        </Button>
      </CardActions>
    </Card>
  );
}
