import React, { useContext } from "react";
import { CartContext } from "../context/Context";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartProducts, removeItem } = useContext(CartContext);



  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {cartProducts.length ? (
        cartProducts.map((product) => (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <img src={product.imageId} alt="" width="100px" />
            <h2 style={{ fontSize: "15px" }}>
              {product.title} x{product.qty}
            </h2>
            <button onClick={() => removeItem(product)}>Delete</button>
          </div>
        ))
      ) : (
        <div style={{ textAlign: "center" }}>
          <h2>You have no items on your Cart.</h2>
          <p>
            You can try with these <Link to="/products">products...</Link>
          </p>
        </div>
      )}
      {
          cartProducts.length && <div>Proceed to <Link to="/checkout">checkout</Link></div>
      }
    </div>
  );
};

export default Cart;
