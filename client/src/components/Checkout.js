import React, { useState, useContext, useEffect } from "react";
import { CartContext } from "../context/Context";
import { getFirestore } from "../firebase/firebase";

const Checkout = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [apartment, setApartment] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [total, setTotal] = useState();
  const [error, setError] = useState(false);
  const { cartProducts, removeAllItems } = useContext(CartContext);

  useEffect(() => {
    setTotal(
      cartProducts
        .map((element) => element.price * element.qty)
        .reduce((val, acc) => val + acc, 0)
    );
  }, [cartProducts]);

  const createOrder = (e) => {
    e.preventDefault();
    if (cartProducts.length) {
      const date = new Date();
      const totalOrder = cartProducts
        .map((element) => element.price * element.stock)
        .reduce((acc, val) => acc + val);
      const newOrder = {
        buyer: {
          name,
          lastName,
          address,
          apartment,
          city,
          country,
          state,
          zipCode,
          email,
          phone,
        },
        cartProducts,
        totalOrder,
        date,
      };
      console.log(name.length);

      if (
        name.length === 0 ||
        lastName.length === 0 ||
        address.length === 0 ||
        city.length === 0 ||
        city.length === 0 ||
        country.length === 0 ||
        country.length === 0 ||
        state.length === 0 ||
        zipCode.length === 0 ||
        phone.length === 0
      ) {
        setError(true);
      } else {
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
    }
  };

  return (
    <div className="checkout">
      <form
        action=""
        onSubmit={(e) => createOrder(e)}
        className="checkout-form"
      >
        <p className="checkout-error">
          {error && "Porfavor, rellena todos los datos."}
        </p>

        <div className="checkout-form-names">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
          />
        </div>

        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Addres"
        />
        <input
          type="text"
          value={apartment}
          onChange={(e) => setApartment(e.target.value)}
          placeholder="Appartment, suit, etc"
        />
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="City"
        />
        <div className="checkout-form-country">
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="Country"
          />
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
            placeholder="State"
          />
          <input
            type="text"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            placeholder="Zip Code"
          />
        </div>

        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <div className="checkout-form-button">
          <button className="btn" type="submit">
            Finish buy
          </button>
        </div>
      </form>

      {confirmation !== "" ? (
        <div className="checkout-confirmation">
          <p>
            Tu id de compra es: <span>{confirmation}</span>.
          </p>
          <p>Pronto te deberia llegar un mail con mayor información.</p>
          <p>Muchas gracias por tu compra!</p>
        </div>
      ) : (
        <div className="checkout-items">
          {cartProducts.map((element) => (
            <div className="checkout-item">
              <div className="checkout-item-image">
                <img src={element.imageId} alt="" />
              </div>
              <div className="checkout-item-info">
                <h4>{element.title}</h4>
                <span>x{element.qty}</span>
              </div>
              <div className="checkout-item-price">
                <span>${element.price}.00</span>
              </div>
            </div>
          ))}
          <div className="checkout-total">
            <p>Total</p>
            <p>${total}.00</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
