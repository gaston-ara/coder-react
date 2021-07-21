import React from 'react'
import Counter from '../counter/Counter'

function ItemDetail() {
    return (
        <div>
            <div className="container">
            <div className="row">
                <div className="col-md-7 img-box">
                    <img src="https://http2.mlstatic.com/D_NQ_NP_658245-MLA43229688028_082020-V.webp" alt="" />
                </div>
                <div className="col-md-5 buy-box">
                    <div className="row">
                        <div className="col-md-12 buybox-title">
                            <h3>Mouse Logitech Master Series MX Master 3</h3>
                        </div>
                        <div className="col-md-12 buybox-price">
                            <p>$10349</p>
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
        </div>
    )
}

export default ItemDetail
