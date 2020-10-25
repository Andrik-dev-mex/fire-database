import React from "react";
import {Switch, Route} from "react-router-dom";
import Login from "./components/Login";
import Main from "./components/";
import Products from "./components/Products";
import Customers from "./components/Customers";
import SignUp from "./components/SignUp";

export default function Routes() {
  return(
    <Switch>
      <Route exact path = "/" component={Main}/>
      <Route exact path = "/login" component={Login}/>
      <Route exact path = "/products" component={Products}/>
      <Route exact path = "/customers" component={Customers}/>
      <Route exact path = "/signup" component= {SignUp}/>
    </Switch>
  )
}