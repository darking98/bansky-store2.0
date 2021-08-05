import React from "react";
import { Link } from "react-router-dom";

const ItemProduct = ({ product }) => {
  return (
    <div className="card-product">
      <div className="card-product-image">
        <img src={product.imageId} alt="" height="280px" />
      </div>
      <div className="card-product-title">
        <h3>{product.title}</h3>
      </div>
      <div className="card-product-button-container">
        <Link to={`/product/${product.id}`}>
          <button>See Details</button>
        </Link>
      </div>
    </div>
  );
};

export default ItemProduct;
