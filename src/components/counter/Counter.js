import React from 'react'

function Counter(props) {

    return (
        <div className="row">
            <div className="col-md-4 contador">
                <button className="btn-contador" onClick={props.restar}>-</button>
                <p>{props.cantidad}</p>
                <button className="btn-contador" onClick={props.sumar}>+</button>
            </div>
            <div className="col-md-8 details-btn">
                <button onClick={props.onAdd}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default Counter