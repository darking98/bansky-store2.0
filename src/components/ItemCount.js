import React from 'react'

const itemCount = ({counter, setCounter}) => {

    return (
        <div className="card-product-add-cart">
            <div className="card-product-counter">
                <button onClick={counter > 0 ? () => setCounter(counter - 1) : ""}>-</button>
                    <h4>{counter}</h4>
                <button onClick={() => setCounter(counter + 1)}>+</button>
            </div>
            <div className="card-product-add-button">
                <button>Add to cart</button>
            </div>
        </div>
    )
}

export default itemCount
