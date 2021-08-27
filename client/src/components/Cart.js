import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/Context";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartProducts, removeItem } = useContext(CartContext);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    console.log(cartProducts);
    setTotal(
      cartProducts
        .map((element) => element.price * element.qty)
        .reduce((val, acc) => val + acc, 0)
    );
  }, [cartProducts]);

  return (
    <div className="cart">
      <>
        <div className="cart-header">
          <h2>Mi Carrito</h2>
        </div>
        {cartProducts.length ? (
          <div className="cart-header-info">
            <h4>Precio</h4>
            <h4>Cantidad</h4>
            <h4>Total</h4>
          </div>
        ) : null}
      </>

      <div className="cart-card-container">
        {cartProducts.length ? (
          cartProducts.map((product) => (
            <div className="cart-card">
              <div className="cart-card-image-title">
                <img src={product.imageId} alt="" width="100px" />
                <h3>{product.title}</h3>
              </div>
              <div className="cart-card-attr">
                <h3>${product.price}.00</h3>
              </div>
              <div className="cart-card-attr">
                <h3>{product.qty}</h3>
              </div>
              <div className="cart-card-attr">
                <h3>${product.qty * product.price}.00</h3>
              </div>
              <div className="cart-card-attr">
                <span onClick={() => removeItem(product)}>Delete</span>
              </div>
            </div>
          ))
        ) : (
          <div className="cart-empty">
            <h4>Tu carrito está vacio.</h4>
            <img src="https://cdn.shopify.com/s/files/1/1104/4168/t/1254/assets/cancellation.gif?v=15390229788054308111" alt="" height="600px" />
            <p>
              <Link className="btn" to="/products">Continuar comprando</Link>
            </p>
          </div>
        )}
        {cartProducts.length ? (
          <div className="cart-finish-container">
            <div>
              <div className="cart-finish-total">
                <h3>Total</h3>
                <h3>${total}.00</h3>
              </div>
              <Link className="btn" to="/checkout">
                Proceed to checkout
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Cart;
