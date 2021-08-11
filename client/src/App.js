import React, { useState } from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import Home from "./components/Home";
import CartProvider from "./context/Context";
import Cart from "./components/Cart";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from "./components/Checkout";

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
            <Route path={"/product/:id"} component={ItemDetailContainer} />
            <Route path ={"/cart"} component ={Cart}/>
            <Route path={"/checkout"} component={Checkout}/>
          </Switch>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
