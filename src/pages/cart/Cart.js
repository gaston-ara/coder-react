import React from 'react'
import EmptyCart from '../../components/cart/EmptyCart'
import ItemCart from '../../components/cart/ItemCart'
import TotalPriceCart from '../../components/cart/TotalPriceCart'
import {useCartContext} from '../../context/Contexto'

function Cart() {
    const {cartItems} = useCartContext();
    console.log(cartItems);
    return (
        <div className="container cart-container">
             <hr />
            <div className="cart-item-container">
                
                {cartItems.length > 0? (cartItems.map((item, index) =>{
                return <ItemCart key={index} image={item.thumbnail} title={item.title} price={item.price} qty={item.qty}/>
            }))
            :
            (<EmptyCart/>)}
            </div>
            <hr />
            <div className="total-price">
                <TotalPriceCart/>
            </div>
            <hr className="w-100" />
            <div >
                <button className="buy-btn-cart">Comprar</button>
            </div> 
            
            
        </div>
    )
}

export default Cart
