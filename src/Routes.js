import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Main from "./components/categories";
import Products from "./components/crud/Products";
import Customers from "./components/crud/Customers";
import SignUp from "./components/auth/SignUp";
import NewProduct from "./components/crud/NewProduct";
import NewCustomer from "./components/crud/NewCustomer";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/customers" component={Customers} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/addproduct" component={NewProduct} />
      <Route exact path ="/addcustomer" component={NewCustomer}/>
    </Switch>
  )
}