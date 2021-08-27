import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/Context";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import CartMenuItems from "./CartMenuItems";
import { GrFormClose } from "react-icons/gr";
import { RiShoppingCart2Line } from "react-icons/ri";
const CartMenu = ({ setOpenMenu, openMenu, children }) => {
  const { cartProducts, cartCounter, removeItem, removeAllItems } =
    useContext(CartContext);
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
    <div className="nav-cart">
      {children}
      <span>{cartCounter}</span>
      {openMenu && (
        <div className="nav-container">
          <div className="nav-cart-open">
            <div className="nav-cart-header">
              <AiOutlineArrowRight onClick={() => setOpenMenu(!openMenu)} />
              <div className="nav-cart-header-cartIcon">
                <Link to="/cart"  onClick={() => setOpenMenu(!openMenu)}>
                  <RiShoppingCart2Line />
                </Link>
                {cartCounter}
              </div>
            </div>
            {cartProducts.length ? (
              <div className="cart-menu-container">
                {cartProducts.map((product) => (
                  <div className="cart-menu-item-wrapper">
                    <CartMenuItems key={product.id} product={product} />
                    <GrFormClose onClick={() => removeItem(product)} />
                  </div>
                ))}
                <div className="cart-menu-footer">
                  <div className="cart-menu-footer-total">
                    <h3>Subtotal</h3>
                    <span> ${total}.00</span>
                  </div>
                  <div className="cart-menu-footer-total">
                    <h3>Shipping</h3>
                    <span> FREE</span>
                  </div>
                  <div className="cart-menu-footer-buttons">
                    <div className="cart-menu-footer-remove">
                      <p className="btn" onClick={removeAllItems}>
                        Remove all items
                      </p>
                    </div>
                    <div className="cart-menu-footer-remove">
                      <Link to="/checkout" className="btn" onClick={() => setOpenMenu(!openMenu)} >
                        Proceed to checkout
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="empty-card">
                <div className="empty-card-header">
                  <p>Your cart is empty</p>
                </div>
                <div className="empty-card-links">
                  <Link
                    className="btn"
                    to="/category/remeras"
                    onClick={() => setOpenMenu(!openMenu)}
                  >
                    Remeras
                  </Link>
                  <Link
                    className="btn"
                    to="/category/zapatillas"
                    onClick={() => setOpenMenu(!openMenu)}
                  >
                    Zapatillas
                  </Link>
                  <Link
                    className="btn"
                    to="/category/pantalones"
                    onClick={() => setOpenMenu(!openMenu)}
                  >
                    Pantalones
                  </Link>
                  <Link
                    className="btn"
                    to="/category/buzos"
                    onClick={() => setOpenMenu(!openMenu)}
                  >
                    Buzos
                  </Link>
                  <Link
                    className="btn"
                    to="/category/camperas"
                    onClick={() => setOpenMenu(!openMenu)}
                  >
                    Camperas
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartMenu;
