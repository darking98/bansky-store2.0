import React from 'react'
const CartMenu = ({openMenu, children}) => {
    return (
        <div className="nav-cart">
            {children}
            {
                openMenu &&

                <div className="nav-cart-open">
                    <p>Your products</p>
                </div>
            }
        </div>
    )
}

export default CartMenu
