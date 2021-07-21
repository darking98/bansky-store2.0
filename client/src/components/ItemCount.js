import React from 'react'

const itemCount = ({counter, setCounter}) => {

    const handleCounter = (e) => {
        if(e.target.innerText === '-' && counter !== 1){
            setCounter(counter - 1)
        }else if(e.target.innerText === '+'){
            setCounter(counter+1);
        }
    }

    return (
        <div className="card-product-add-cart">
            <div className="card-product-counter">
                <button onClick={handleCounter}>-</button>
                    <h4>{counter}</h4>
                <button onClick={handleCounter}>+</button>
            </div>
            <div className="card-product-button-container">
                <button>Add to cart</button>
            </div>
            
        </div>
    )
}

export default itemCount
