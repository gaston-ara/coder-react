import React from 'react'
import ItemCounterContainer from '../counter/ItemCounterContainer'

function Item(props) {
    
    return (
        <div className="col-md-4" >
            <div className="card-item" key={props.key}>
                    <img className="card-img" src={props.image} alt="..." />
                    <hr className="w-75 mx-auto" />
                    <div className="card-content">
                        <h5 class="card-title">{props.title}</h5>
                        <p class="card-text">${props.price}</p>
                    </div>
                    <ItemCounterContainer stock={props.stock}/>
            </div>
        </div>
    )
}

export default Item
