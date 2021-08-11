import React, {useEffect, useState} from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import { getFirestore } from "../firebase/firebase";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const history = useHistory()


  useEffect(() => {

    const firestore = getFirestore()
    const collection = firestore.collection("products")
    let query = collection.doc(id).get()

    console.log(query)

    query
        .then(doc => {
            if(doc.exists) {
              console.log(doc.data())
              setProduct(doc.data())
            }else{
              history.push("/")
            }
        })
        .catch(err => {
            console.log(err)
        }) 
}, [id])


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
