import React, {useState} from 'react'
import Counter from './Counter'

function ItemCounterContainer({stock}) {
    
    const [cantidad, setCantidad] = useState(1);
    
    const onAdd = () => {
        if (cantidad !== 1) {
            alert('Se agregaron ' + cantidad + ' productos')
        }else{
            alert('Se agregó ' + cantidad + ' producto')
        }
    }
    
    const sumar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
        }
    }
    const restar = ()=> {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    }
    return (
        <div>
            <div className="col-md-4">
                <Counter sumar={sumar} restar={restar} cantidad={cantidad}/>
            </div>
            <div className="col-md-8 details-btn">
                <button  onClick={onAdd}>AGREGAR AL CARRITO</button>
            </div>
            
        </div>
    )
}

export default ItemCounterContainer
