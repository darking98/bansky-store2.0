import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getCategory } from "../fetch/getItems";
import ItemCount from "./ItemCount";

const ItemDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    getCategory().then((res) =>
      setProduct(res.find((element) => element.id === id))
    );
  }, [id]);

  return (
    <>
      {
        <div className="item-detail-container">
          <div className="item-detail-image">
            <img src={product.image} alt="" width="500px" />
          </div>
          <div className="item-detail-info">
            <h2>{product.title}</h2>
            <p>${counter !== 1 ? product.price * counter : product.price}.00</p>
            <p>Stock disponible: {product.stock}</p>
            <ItemCount
                counter={counter}
                setCounter={setCounter}
                stock={product.stock}
            />
          </div>
          
        </div>
      }
    </>
  );
};

export default ItemDetail;
