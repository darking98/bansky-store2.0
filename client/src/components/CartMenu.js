import React,{useContext} from 'react'
import { CartContext } from '../context/Context'
import {AiFillCloseCircle} from 'react-icons/ai'
import {IoMdRemoveCircleOutline} from 'react-icons/io'
const CartMenu = ({setOpenMenu,openMenu, children}) => {

    const { cartProducts, cartCounter, removeItem, removeAllItems } = useContext(CartContext);
    console.log(cartCounter)

    return (
        <div className="nav-cart">
            {children}
            <span>{cartCounter}</span>
            {
                openMenu &&

                <div className="nav-cart-open">
                    <h3>Your Cart</h3>
                    <AiFillCloseCircle onClick={() => setOpenMenu(!openMenu)}/>
                    {
                        cartProducts.length ? 
                        <div>
                            {
                                cartProducts.map(product => (
                                    <div key={product.id}>
                                        <p>{product.title}{product.qty}</p>
                                        <IoMdRemoveCircleOutline onClick={() => removeItem(product)}/>
                                    </div>
                                ))
                            }
                            <button onClick={removeAllItems}>Remove all items</button>
                        </div>

                        : <div>You have selected no products.</div>
                    } 
                </div>
            }
        </div>
    )
}

export default CartMenu
