import React, { useState } from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetail from "./components/ItemDetail";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CartProvider from "./context/Context";
import Cart from "./components/Cart";

function App() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <CartProvider>
      <Router>
        <NavBar openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <div className={openMenu && 'dark-background'}>
          <Switch>
            <Route path={"/"} exact component={Home} />
            <Route path={"/products"} component={ItemListContainer} />
            <Route path={"/category/:id"} component={ItemListContainer} />
            <Route path={"/product/:id"} component={ItemDetail} />
            <Route path ={"/cart"} component ={Cart}/>
          </Switch>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
