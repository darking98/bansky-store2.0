import React from "react";
const CartMenuItems = ({ product }) => {
  return (
    <div className="cart-menu-item">
      <div className="cart-menu-image">
        <img src={product.imageId} alt="" width="100px" />
      </div>
      <div className="cart-menu-info">
        <div className="cart-menu-title">
          <p>{product.title}</p>
        </div>
        <div className="cart-menu-div">
          <p>{product.gender}</p>
        </div>
        <div className="cart-menu-div">
          <p>x{product.qty}</p>
        </div>
        <div className="cart-menu-div">
          <p>${product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default CartMenuItems;
