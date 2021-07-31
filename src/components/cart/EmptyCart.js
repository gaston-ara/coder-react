import React from 'react'
import {Link} from 'react-router-dom'

function EmptyCart() {
    return (
        <div className="empty-cart-message">
            <h3>Tu carrito está vacio :(</h3>
                <Link to='/' style={{color:'grey'}}>Volver a Inicio</Link>
        </div>
    )
}

export default EmptyCart
