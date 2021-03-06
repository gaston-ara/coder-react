import React, { useContext, useState } from 'react';
import { createContext } from 'react'

export const CartContext = createContext();
export const useCartContext = () => useContext(CartContext)

const CartProvider = ({ children }) => {

    const [cartCount, setcartCount] = useState(0)
    const [cartItems, setcartItems] = useState([]);

    const addToCart = (item, qty) => {
        if (cartItems.some(product => product.title === item.title)) {
            const copy = [...cartItems];
            const repeatedIndex = cartItems.findIndex(
                product => product.title === item.title
            );
            copy[repeatedIndex] = {
                ...copy[repeatedIndex],
                count: copy[repeatedIndex].qty + qty
            }
            setcartItems(copy)
        } else {
            setcartItems([...cartItems, { ...item, qty }])
        }
        setcartCount(prev => prev + qty)
    }

    const removingItem = (id, qty) => {
        const newArray = cartItems.filter((item) => item.id !== id);
        const updateCount = cartCount - qty
        setcartItems(newArray);
        setcartCount(updateCount)
    }

    const clear = () => {
        setcartItems([])
        setcartCount(0)

    }

    return <CartContext.Provider value={{ cartCount, cartItems, addToCart, removingItem, clear }}>{children}</CartContext.Provider>
}

export default CartProvider;
