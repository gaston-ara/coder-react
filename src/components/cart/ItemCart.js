import React from 'react'
import {useCartContext} from '../../context/Contexto'

function ItemCart(props) {
    const {removingItem} = useCartContext();
    

    const Delete = () =>{
        removingItem(props.id, props.qty)
    }
    return (
        <div className="row itemcart" id={props.id}>
            <div className="col-md-2 item-cart-img">
                <img src={props.image} alt="" />
            </div>
            <div className="col-md-1 d-flex justify-content-center align-items-center">
                x{props.qty}
            </div>
            <div className="col-md-6 item-cart-title">
                {props.title}
            </div>
            <div className="col-md-2 item-cart-price">
                ${props.price}
            </div>
            <div className="col-md-1 item-cart-delete">
                <button id={props.key} onClick={Delete} className="btn-delete-cart" type="button">
                    <svg class="icon-inline svg-icon-text icon-lg" width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M296 432h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8zm-160 0h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8zM440 64H336l-33.6-44.8A48 48 0 0 0 264 0h-80a48 48 0 0 0-38.4 19.2L112 64H8a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h24v368a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V96h24a8 8 0 0 0 8-8V72a8 8 0 0 0-8-8zM171.2 38.4A16.1 16.1 0 0 1 184 32h80a16.1 16.1 0 0 1 12.8 6.4L296 64H152zM384 464a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V96h320zm-168-32h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8z"></path></svg>
                </button>
            </div>
        </div>
    )
}

export default ItemCart
