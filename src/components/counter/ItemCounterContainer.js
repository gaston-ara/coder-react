import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Counter from './Counter'
import { useCartContext } from '../../context/Contexto'

function ItemCounterContainer({ item, stock }) {

    const [cantidad, setCantidad] = useState(1);
    const [addedProduct, setaddedProduct] = useState(false)

    const { addToCart } = useCartContext()

    const onAdd = () => {
        setaddedProduct(true);
        addToCart(item, cantidad)
        console.log({ item });
    }

    const sumar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
        }
    }
    const restar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    }
    return (
        <div >
            <div className="stock-disponible">
                <p>Stock: {stock}</p>
            </div>
            <div className="counter-container">
                <div className="col-md-12 botones-counter">
                    {!addedProduct ? (
                        <Counter sumar={sumar} restar={restar} cantidad={cantidad} onAdd={onAdd} />
                    ) : (
                        <Link to="/cart" style={{ textDecoration: 'none' }} className="finish-buying" >
                            Terminar compra
                        </Link>
                    )
                    }

                </div>

            </div>


        </div>
    )
}

export default ItemCounterContainer
