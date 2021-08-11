import React, { useState, useContext } from "react";
import { CartContext } from "../context/Context";
import { getFirestore } from "../firebase/firebase";

const Checkout = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmation, setConfirmation] = useState("");

  const { cartProducts, removeAllItems } = useContext(CartContext);

  const createOrder = () => {
    if (cartProducts.length) {
      const date = new Date();
      const totalOrder = cartProducts
        .map((element) => element.price * element.stock)
        .reduce((acc, val) => acc + val);
      const newOrder = {
        buyer: {
          name,
          email,
          phone,
        },
        cartProducts,
        totalOrder,
        date,
      };
      const firestore = getFirestore();
      const collection = firestore.collection("orders");
      const query = collection.add(newOrder);

      query.then((res) => {
        setConfirmation(res.id);
        cartProducts.map((element) => {
          const firestore = getFirestore();
          const collection = firestore.collection("products");
          collection.get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              if (doc.data().title === element.title) {
                let query = collection.doc(doc.id);
                query = query.update({ stock: element.stock - element.qty });
                query.then(() => {
                  console.log("actualizado");
                });
              }
            });
          });
          removeAllItems();
        });
      });
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <form action="" style={{ display: "flex", flexDirection: "column" }}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone"
        />
        <button type="button" onClick={createOrder}>
          Finish buy
        </button>
      </form>
      
      {confirmation !== "" ?
        `Tu id de compra es: ${confirmation}. Pronto te deberia llegar un mail con mayor información.`
        :
        <div style={{display:'flex', flexDirection:'column'}}>
        {cartProducts.map((element) => (
          <div>
            {element.title}
            <img src={element.image} alt="" />
            {element.price}
          </div>
        ))}
      </div>
    }
    </div>
  );
};

export default Checkout;
