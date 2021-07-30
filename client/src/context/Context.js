import React,{useState} from 'react'

export const CartContext = React.createContext();

const CartProvider = ({children}) => {
    
    const [cartProducts, setCartProducts] = useState([]);
    const [cartCounter, setCartCounter] = useState(0);
    const [hideCounter, setHideCounter] = useState(false)

    const addToCart = (item, qty) => {
      if(cartProducts.find(product => product.qty + qty > item.stock))return 
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

      setHideCounter(!hideCounter)
    }

    const removeItem = (item) => {
        setCartProducts(cartProducts.filter(element => element !== item))
        setCartCounter(cartCounter - item.qty)
    }

    const removeAllItems = () => {
        setCartProducts([]);
        setCartCounter(0)
    }

    return (
        <CartContext.Provider value={{cartProducts, cartCounter, hideCounter, addToCart, removeItem, removeAllItems, setHideCounter }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider
