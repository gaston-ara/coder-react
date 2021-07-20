import React from 'react'

function Counter(props) {
    
    return (
        <div>
            <div className="contador">
                <button className="btn-contador" onClick={props.restar}>-</button>
                <p>{props.cantidad}</p>
                <button className="btn-contador" onClick={props.sumar}>+</button>
            </div>
        </div>
    )
}

export default Counter