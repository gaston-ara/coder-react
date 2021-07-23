import React from 'react'
import ItemCounterContainer from '../counter/ItemCounterContainer'

function ItemDetail({ item }) {
    return (
        <div>
            <div className="container">
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
                                    <ItemCounterContainer stock={item.available_quantity} />
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="text-left product-description">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, nobis quo vero sint saepe magnam inventore cumque laboriosam adipisci hic expedita, eligendi minima sunt enim, ex vel nesciunt quis qui?
                    Earum eos maiores libero, nemo perferendis atque dicta labore quaerat, sint quam perspiciatis hic itaque, iusto consequatur saepe corporis optio enim beatae cumque praesentium vitae? Facilis non animi voluptates sit.</p>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
