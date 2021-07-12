import React, {useState} from 'react'
import ItemCount from './ItemCount'

const ItemProduct = () => {

    const [counter, setCounter] = useState(1);

    const price = 8199;

    return (
        <div className="card-product">
            <div className="card-product-image">
                <img src="https://www.bompie.com.ar/media/catalog/product/cache/1e7c11b43132c034d445b386916b52f7/g/d/gd5480_app_photo_front-center_white.jpg" alt="" height="280px"/>
            </div>
            <div className="card-product-title">
                <h3>Campera Adidas Hombre Rompevientos Essential</h3>
            </div>
            <div className="card-product-price">
                <h4>{`$ ${counter >= 1 ? counter * price : price}.00`}</h4>
            </div>
            <ItemCount counter ={counter} setCounter={setCounter}/>
        </div>
    )
}

export default ItemProduct
