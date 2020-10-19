import React from 'react';
import Navbar from "./layout/Navbar";
import {BrowserRouter as Router} from "react-router-dom";
import Routes from "./Routes";
import {CssBaseline} from "@material-ui/core";


function App() {
  return (
    <Router >
      <Navbar/>
      <CssBaseline/>
      <Routes/>
    </Router>
  );
}

export default App;
