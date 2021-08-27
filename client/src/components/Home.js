import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ItemProduct from "./ItemProduct";
import { getFirestore } from "../firebase/firebase";
const Home = () => {
  const [products, setProducts] = useState([]);
  const [carouselCategory, setCarouselCategory] = useState("ZAPATILLAS");
  const handleCarouselAnimation = (e) => {
    setCarouselCategory(e.target.innerText);
  };

  useEffect(() => {
    const firestore = getFirestore();
    const collection = firestore.collection("products");
    if (carouselCategory) {
      let query = collection.where(
        "categoryId",
        "==",
        carouselCategory.toLowerCase()
      );
      query = query.get();
      query.then((snapshot) => {
        const documents = snapshot.docs;
        const products = documents.map((element) => { return { id: element.id, ...element.data() }});
        setProducts(products);
      });
    }
    console.log(products);
  }, [carouselCategory]);
  return (
    <>
      <div className="hero">
        <div className="hero-container">
          <div className="hero-info">
            <h2>Lo mejor para vos!</h2>
            <p>
              Descrubrí los beneficios exclusivos que tenemos para vos esta
              semana!
            </p>
          </div>
          <div className="hero-buttons">
            <Link to="/category/remeras" className="btn">
              Remeras
            </Link>
            <Link to="/category/zapatillas" className="btn">
              Zapatillas
            </Link>
          </div>
        </div>
      </div>
      <div className="home-carousel-container">
        <div className="home-carousel-header">
          <h2>Recomendado por nosotros</h2>
        </div>
        <div className="carousel">
          
          <div className="carousel-categories">
          <div
            className="carousel-bar"
            style={
              carouselCategory === "ZAPATILLAS"
                ? { left: "10%" }
                : carouselCategory === "REMERAS"
                ? { left: "44%" }
                : { left: "77%" }
            }
          />
            <h4 onClick={handleCarouselAnimation}>Zapatillas</h4>
            <h4 onClick={handleCarouselAnimation}>Remeras</h4>
            <h4 onClick={handleCarouselAnimation}>Camperas</h4>
          </div>
          <div className="carousel-items-container">
          {products.map((element) => (
            <ItemProduct product={element} />
          ))}
        </div>
        </div>
        
      </div>
    </>
  );
};

export default Home;
