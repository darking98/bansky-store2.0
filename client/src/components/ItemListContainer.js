import React, { useEffect, useState } from "react";
import ItemProduct from "./ItemProduct";
import { useParams } from "react-router";
import { getFirestore } from "../firebase/firebase";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const firestore = getFirestore();
    const collection = firestore.collection("products");
    if (!id) {
      const query = collection.get();

      query
        .then((snapshot) => {
          const documents = snapshot.docs;
          const products = documents.map((doc) => {
            return { id: doc.id, ...doc.data() };
          });
          setProducts(products);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      let query = collection.where("categoryId", "==", id);
      query = query.get();
      query
        .then((snapshot) => {
          const documents = snapshot.docs;
          const products = documents.map((doc) => {
            return { id: doc.id, ...doc.data() };
          });
          setProducts(products);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id]);

  return (
    <div className="item-list-container-wrapper">
      <div className="item-list-container">
        {products.length === 0 ? (
          <h2>Loading...</h2>
        ) : (
          products.map((product) => (
            <ItemProduct key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default ItemListContainer;
