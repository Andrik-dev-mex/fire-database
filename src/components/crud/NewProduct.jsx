import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  containerTwo: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  input: {
    display: "none",
  },
  button: {
    marginLeft: "10px",
  },
}));

const NewProduct = (props) => {
  const classes = useStyles();

  const [product, setProduct] = useState({
    sku: "",
    name: "",
    description: "",
    stock: "",
    price: "",
    image: "",
  });

  const [image, setImage] = useState([]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleChangeImage = (e) => {
    if (!e.target.files[0]) return;
    const file = e.target.files[0];
    setImage({
      type: file.type.split("/")[1],
      file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (image) {
      product.image = `${product.sku}.${image.type}`;
      firebase
        .storage()
        .ref(`/images/${product.image}`)
        .put(image.file)
        .then(() => {
          firebase
            .storage()
            .ref()
            .child(`/images/${product.image}`)
            .getDownloadURL()
            .then((url) => {
              setProduct({ ...product, image: url });
            });
        });
    }

    firebase
      .database()
      .ref("/products")
      .push(product)
      .then((res) => {
        props.history.push("/products");
      })
      .catch((error) => {
        if (error) {
          console.log(error);
        }
      });
  };

  return (
    <div className={classes.container}>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div>
          <TextField
            name="sku"
            label="sku"
            multiline
            rowsMax={4}
            onChange={handleChange}
            defaultValue={product.sku}
            variant="outlined"
          />
          <TextField
            name="name"
            label="producto"
            multiline
            rowsMax={4}
            defaultValue={product.name}
            onChange={handleChange}
            variant="outlined"
          />
          <TextField
            name="description"
            label="descripción"
            multiline
            rowsMax={4}
            onChange={handleChange}
            defaultValue={product.description}
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            name="stock"
            label="stock"
            multiline
            rowsMax={4}
            defaultValue={product.stock}
            onChange={handleChange}
            variant="outlined"
          />
          <TextField
            name="price"
            label="precio"
            multiline
            rowsMax={4}
            onChange={handleChange}
            defaultValue={product.price}
            variant="outlined"
          />
          <div className={classes.containerTwo}>
            <label htmlFor="fileImg">
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <PhotoCamera />
              </IconButton>
            </label>
            <input
              accept="image/*"
              className={classes.input}
              id="fileImg"
              type="file"
              onChange={handleChangeImage}
            />
            <label htmlFor="fileImage">
              <Button variant="contained" color="primary" component="span">
                Subir Imagen
              </Button>
            </label>
            <input
              accept="image/*"
              className={classes.input}
              id="fileImage"
              type="file"
              onChange={handleChangeImage}
            />

            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              type="submit"
            >
              Guardar
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default withRouter(NewProduct);
