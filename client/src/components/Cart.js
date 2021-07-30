import React,{useContext} from 'react'
import { CartContext } from '../context/Context'

const Cart = () => {

    const {cartProducts} = useContext(CartContext)

    return (
        <div>
            {
                cartProducts.map(product => (
                    <div>{product.title} x{product.qty}</div>
                ))
            }
        </div>
    )
}

export default Cart
