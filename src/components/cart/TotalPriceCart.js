import React from 'react'

function TotalPriceCart(props) {
    return (
        <div className="row box-price-cart">
            <div className="col-md-12 ">
                <div className="total-price">Precio Total: ${props.total}</div>
            </div>
        </div>
    )
}

export default TotalPriceCart
