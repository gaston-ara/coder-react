import React from 'react'
import EmptyCart from '../../components/cart/EmptyCart'
import ItemCart from '../../components/cart/ItemCart'
import TotalPriceCart from '../../components/cart/TotalPriceCart'


function Cart() {
    return (
        <div className="container cart-container">
            <hr />
            <div className="cart-item-container">
                <EmptyCart/>
                <ItemCart/>
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
