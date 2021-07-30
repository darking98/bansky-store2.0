import React,{useState} from 'react'

export const CartContext = React.createContext();

const CartProvider = ({children}) => {
    
    const [cartProducts, setCartProducts] = useState([]);
    const [cartCounter, setCartCounter] = useState(0);

    const addToCart = (item, qty) => {
        if (cartProducts.find(product => product.title === item.title)) {
            const copy = [...cartProducts];
            const repeteadIndex = cartProducts.findIndex(
              product => product.title === item.title
            );
            copy[repeteadIndex] = {
              ...copy[repeteadIndex],
              qty: copy[repeteadIndex].qty + qty
            };
            setCartProducts(copy);
          } else {
            setCartProducts([...cartProducts, { ...item, qty }]);
          }
          setCartCounter(prev => prev + qty);
    }

    const removeItem = (item) => {
        setCartProducts(cartProducts.filter(element => element !== item))
        setCartCounter(cartCounter - item.qty)
    }

    const removeAllItems = () => {
        setCartProducts([]);
    }

    return (
        <CartContext.Provider value={{cartProducts, cartCounter, addToCart, removeItem, removeAllItems}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider
