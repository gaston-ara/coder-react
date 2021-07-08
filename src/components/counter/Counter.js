import React, {useState} from 'react'

function Counter() {
    const [cantidad, setCantidad] = useState(0);
    function sumar() {
        setCantidad(cantidad + 1);
    }
    function restar() {
        if (cantidad > 0) {
            setCantidad(cantidad - 1);
        }
    }
    return (
        <div>
            <div className="contador">
                <button className="btn-contador" onClick={restar}>-</button>
                <p>{cantidad}</p>
                <button className="btn-contador" onClick={sumar}>+</button>
            </div>
        </div>
    )
}

export default Counter