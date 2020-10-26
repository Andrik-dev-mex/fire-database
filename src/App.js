import React, {useState, useEffect}  from 'react';
import Navbar from "./layout/Navbar";
import User from "./components/User";
import {BrowserRouter as Router} from "react-router-dom";
import Routes from "./Routes";
import firebase from "firebase/app"; 
import {loadUser} from "./utils/dbUtils";
import "firebase/database";
import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyA95kwOrOfaT7DvJY09gQOiHcNvEc7hXFA",
    authDomain: "gesty-v1.firebaseapp.com",
    databaseURL: "https://gesty-v1.firebaseio.com",
    projectId: "gesty-v1",
    storageBucket: "gesty-v1.appspot.com",
    messagingSenderId: "538552286959",
    appId: "1:538552286959:web:76ce0a05f2bb4915f6651a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function App() { 
  const [user, setUser] = useState(null);

  const onLogout = () => {
    setUser(null);
  };

  //cuando se cargue la aplicacion se cargue un evento, que esa al pendiente del firebase, cuando cambie el status de la autonticacion
  //cuando cambie el satus de la utenticacion entonces se procesa el response, y se va a leer el usuario
  useEffect(() => {
    firebase.auth().onAuthStateChanged(response => {
      if (response){
        //leer los datos del usuario
        loadUser(response.uid)
        .then(data => { setUser(data); });
      }
    });
  }, []);

  return (
    <Router >
      <Navbar>
        {user && <User user={user} onLogout={onLogout}/>}
      </Navbar>
      <Routes/>
    </Router>
  );
}

export default App;
