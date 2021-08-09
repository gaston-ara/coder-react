import React from 'react'
import { Link } from 'react-router-dom'
import EmptyCart from '../../components/cart/EmptyCart'
import ItemCart from '../../components/cart/ItemCart'
import TotalPriceCart from '../../components/cart/TotalPriceCart'
import { useCartContext } from '../../context/Contexto'

function Cart() {
    const { cartItems } = useCartContext();

    let totalCart = 0;
    for (let item in cartItems) {
        totalCart += cartItems[item].price * cartItems[item].qty;
    }

    console.log(cartItems);
    return (
        <div className="container cart-container">
            <hr />
            <div className="cart-item-container">

                {cartItems.length > 0 ? (cartItems.map((item, index) => {
                    return <ItemCart key={index} id={item.id} image={item.thumbnail} title={item.title} price={item.price} qty={item.qty} />
                }))
                    :
                    (<EmptyCart />)}
            </div>
            <hr />

            <div className="total-price">
                {cartItems.length > 0 ? (
                    <TotalPriceCart total={totalCart} />
                ) : (
                    <></>
                )}

            </div>
            <hr className="w-100" />
            <div >
                {cartItems.length > 0 ? (
                    <Link to="/checkout" style={{ textDecoration: "none" }}><button className="buy-btn-cart">Comprar</button></Link>

                ) : (
                    <></>
                )}

            </div>


        </div>
    )
}

export default Cart
