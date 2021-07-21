import React from 'react'

const ItemDetail = ({product}) => {
    console.log(product)
    return (
        <div className="item-detail-container">
            <div className="item-detail-image">
                <img src={product.image} alt="" width="500px"/>

            </div>
            <div className="item-detail-info">
                <h2>{product.title}</h2>
                <p>${product.price}.00</p>
                <p>Stock disponible: {product.stock}</p>
            </div>

        </div>
    )
}

export default ItemDetail
