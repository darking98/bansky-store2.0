import React from 'react'
import ItemProduct from './ItemProduct'
import { products } from '../products/products'

const ItemListContainer = () => {

    return (
        <div className="item-list-container">
            {
                products.map(product => (
                    <ItemProduct product = {product}/>
                ))
            }
        </div>
    )
}

export default ItemListContainer
