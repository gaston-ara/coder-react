import React, { useContext, useState } from 'react';
import { createContext } from 'react'

export const CartContext = createContext();
export const useCartContext = () => useContext(CartContext)

const CartProvider = ({ children }) => {
    const [cartCount, setcartCount] = useState(0)
    const updateCartCount = (qty) => {
        setcartCount(prev => prev + qty)
    }
    return <CartContext.Provider value={{ cartCount, updateCartCount }}>{children}</CartContext.Provider>
}

export default CartProvider;
