import React, { useState } from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import Home from "./components/Home";
import CartProvider from "./context/Context";
import Cart from "./components/Cart";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from "./components/Checkout";
import Footer from "./components/Footer";

function App() {
  

  return (
    <CartProvider>
      <Router>
        <NavBar/>
          <Switch>
            <Route path={"/"} exact component={Home} />
            <Route path={"/products"} component={ItemListContainer} />
            <Route path={"/category/:id"} component={ItemListContainer} />
            <Route path={"/product/:id"} component={ItemDetailContainer} />
            <Route path ={"/cart"} component ={Cart}/>
            <Route path={"/checkout"} component={Checkout}/>
          </Switch>
        <Footer/>
      </Router>
    </CartProvider>
  );
}

export default App;
