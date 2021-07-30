import React, {useContext} from 'react'
import { CartContext } from '../context/Context'
import { Link } from 'react-router-dom';


const ItemCount = ({counter, setCounter, stock, product}) => {

    const { addToCart, hideCounter, setHideCounter } = useContext(CartContext);

    const handleCounter = (e) => {
        if(e.target.innerText === '-' && counter !== 1){
            setCounter(counter - 1)
        }else if(e.target.innerText === '+' && counter < stock){
            setCounter(counter+1);
        }
        setHideCounter(false)
    }


    return (
        <div className="detail-add-cart">
            <div className="detail-counter">
                <button onClick={handleCounter}>-</button>
                    <h4>{counter}</h4>
                <button onClick={handleCounter}>+</button>
            </div>
            <div className="detail-button-container">
                {
                    hideCounter ? <p>Tu carrito de compras ya fue actualizado, para terminar con tu compra hacé <Link to="/cart">click acá.</Link></p>
                    :
                    <button onClick={() => addToCart(product, counter)}>Add to cart</button>

                }
            </div>
            
        </div>
    )
}

export default ItemCount
