import React, {useEffect, useState, useContext} from "react";
import { useParams } from "react-router";
import { CartContext } from "../context/Context";
import { getCategory } from "../fetch/getItems";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    getCategory().then((res) =>
      setProduct(res.find((element) => element.id === id))
    );
  }, [id]);


  return (
    <>
        <ItemDetail
            key={product.id}
            product={product}
        />
    </>
  );
};

export default ItemDetailContainer;
