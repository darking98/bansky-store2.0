import React, {useState, useEffect} from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom';

const ItemProduct = ({product}) => {

    const [counter, setCounter] = useState(1);

    return (
            <div className="card-product">
                <div className="card-product-image">
                    <img src={product.image} alt="" height="280px"/>
                </div>
                <div className="card-product-title">
                    <h3>{product.title}</h3>
                </div>
                <div className="card-product-price">
                    <h4>{`$ ${counter >= 1 ? counter * product.price : product.price}.00`}</h4>
                </div>
                <div className="card-product-button-container">
                <Link to={`/product/${product.id}`}>
                    <button>See Details</button>
                </Link>
                        
                </div>
                <ItemCount counter ={counter} setCounter={setCounter} stock ={product.stock}/>
            </div>

    )
}

export default ItemProduct
