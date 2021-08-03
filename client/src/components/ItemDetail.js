import React, {useContext, useState, useEffect } from "react";
import { CartContext } from '../context/Context'
import { Link } from 'react-router-dom';

import ItemCount from "./ItemCount";

const ItemDetail = ({ product }) => {

  const [counter, setCounter] = useState(1);
  const [showButton, setShowButton] = useState(false);
  const { addToCart } = useContext(CartContext);


  const onAdd = () => {
    addToCart(product, counter)
    setShowButton(true)
  };

  useEffect(() => {
    setShowButton(false)
  }, [counter])

  return (
    <>
      <div className="item-detail-container">
        <div className="item-detail-image">
          <img src={product.image} alt="" width="500px" />
        </div>
        <div className="item-detail-info">
          <h2>{product.title}</h2>
          <p>${product.price}.00</p>
          <p>Stock disponible: {product.stock}</p>

          <ItemCount
            counter={counter}
            setCounter={setCounter}
            stock={product.stock}
            onAdd ={onAdd}
          />
          {
            showButton && <Link to="/cart"><button>Finish Buy</button></Link>
          }
          <p>{product.description}</p>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
