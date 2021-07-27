import React from 'react'

const itemCount = ({counter, setCounter, stock}) => {

    const handleCounter = (e) => {
        if(e.target.innerText === '-' && counter !== 1){
            setCounter(counter - 1)
        }else if(e.target.innerText === '+' && counter < stock){
            setCounter(counter+1);
        }
    }

    return (
        <div className="detail-add-cart">
            <div className="detail-counter">
                <button onClick={handleCounter}>-</button>
                    <h4>{counter}</h4>
                <button onClick={handleCounter}>+</button>
            </div>
            <div className="detail-button-container">
                <button>Add to cart</button>
            </div>
            
        </div>
    )
}

export default itemCount
