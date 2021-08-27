import React from 'react'
import {IoMdAdd,IoIosRemove} from 'react-icons/io'

const ItemCount = ({stock,onAdd, counter, setCounter}) => {


    const handleCounter = (e, symbol) => {
        console.log(e.target)
        if(symbol=== '-' && counter !== 1){
            setCounter(counter - 1)
        }else if(symbol === '+' && counter < stock){
            setCounter(counter+1);
        }
    }


    return (
        <div className="detail-add-cart">
            <div className="detail-counter">
                <button onClick={(e) => handleCounter(e,'-')}><IoIosRemove/></button>
                    <h4>{counter}</h4>
                <button onClick={(e) => handleCounter(e,'+')}><IoMdAdd/></button>
            </div>
            <div className="detail-button-container">
                <button className="btn" onClick={onAdd}>Add to cart</button>
            </div>
            
        </div>
    )
}

export default ItemCount
