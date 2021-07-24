import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Counter from './Counter'

function ItemCounterContainer({stock}) {
    
    const [cantidad, setCantidad] = useState(1);
    const [addedProduct, setaddedProduct] = useState(false)
    
    const onAdd = () => {
        setaddedProduct(true)
        // if (cantidad !== 1) {
        //     alert('Se agregaron ' + cantidad + ' productos')
        // }else{
        //     alert('Se agregó ' + cantidad + ' producto')
        // }
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
        <div >
            <div className="stock-disponible">
                <p>Stock: {stock}</p>
            </div>
            <div className="counter-container">
                <div className="col-md-12 botones-counter">
                  {!addedProduct? (
<Counter sumar={sumar} restar={restar} cantidad={cantidad} onAdd={onAdd}/>
                ):(
                    <Link to="/cart" style={{textDecoration:'none'}} className="finish-buying" >
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
