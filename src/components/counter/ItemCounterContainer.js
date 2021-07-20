import React, {useState} from 'react'
import Counter from './Counter'

function ItemCounterContainer(props) {
    
    const [cantidad, setCantidad] = useState(1);
    
    const onAdd = () => {
        if (cantidad !== 1) {
            alert('Se agregaron ' + cantidad + ' productos')
        }else{
            alert('Se agregó ' + cantidad + ' producto')
        }
    }
    
    const sumar = () => {
        if (cantidad < props.stock) {
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
            <Counter sumar={sumar} restar={restar} cantidad={cantidad}/>
            <button onClick={onAdd}>AGREGAR AL CARRITO</button>
        </div>
    )
}

export default ItemCounterContainer
