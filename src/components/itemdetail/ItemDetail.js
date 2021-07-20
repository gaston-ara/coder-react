import React from 'react'

function ItemDetail() {
    return (
        <div>
            {detalle !== undefined ? <div className="container">
            <div className="row">
                <div className="col-md-7 img-box">
                    <img src={detalle.thumbnail} alt="" />
                </div>
                <div className="col-md-5 buy-box">
                    <div className="row">
                        <div className="col-md-12 buybox-title">
                            <h3>{detalle.title}</h3>
                        </div>
                        <div className="col-md-12 buybox-price">
                            <p>${detalle.price}</p>
                        </div>
                        <div className="col-md-12 buy-counter row">
                            <div className="col-md-4 counter-prod">
                                <Counter />
                            </div>
                            <div className="col-md-8 details-btn">
                                <button>AGREGAR AL CARRITO</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="text-left product-description">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque in laudantium iure ad sunt repellendus distinctio, ea maxime pariatur deserunt recusandae dolor saepe. Quasi deserunt iste, commodi numquam vel nemo.
                Suscipit eveniet harum velit error numquam impedit dicta eligendi earum iure porro. Itaque at, voluptatum deserunt veritatis mollitia ullam ratione harum hic! Beatae magni ea ipsam neque quisquam eveniet rem?
                Dignissimos voluptatibus possimus amet nihil odit exercitationem, dolor provident eligendi inventore, voluptate voluptatem. Consequuntur vero omnis voluptate fugit voluptatum, ducimus facere voluptas, eveniet odit odio labore eum aperiam. Eligendi, dignissimos.</p>
            </div>
        </div>
        :
        <Spinner/>
        }
        </div>
    )
}

export default ItemDetail