import React from 'react'
import ItemCounterContainer from '../counter/ItemCounterContainer'

function ItemDetail({ item }) {
    return (
        <div>
            <div className="container" key={item.id}>
                <div className="row">
                    <div className="col-md-6 img-box">
                        <img src={item.thumbnail} alt="" />
                    </div>
                    <div className="col-md-6 buy-box">
                        <div className="row">
                            <div className="col-md-12 buybox-title">
                                <h3>{item.title}</h3>
                            </div>
                            <div className="col-md-12 buybox-price">
                                <p>${item.price}</p>
                            </div>
                            <div className="col-md-12 buy-counter row">
                                <div className="col-md-12 counter-prod">
                                    <ItemCounterContainer item={item} stock={item.available_quantity} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-left product-description">
                    <p>{item.description}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
