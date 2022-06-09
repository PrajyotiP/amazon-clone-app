import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Component/Home";
import Header from "./Component/Header";
import Product from "./Component/Product";
import Checkout from "./Checkout";

function App() {
return (
  <div className="app">
    <Router>
      <Switch>
        <Route exact path="/">
       
            <Header />
            <Home />
            <Product />
        </Route>
        <Route path={'/Checkout'} component={Checkout}/>
      </Switch>
     
    </Router>
  </div>
);
}
export default App;