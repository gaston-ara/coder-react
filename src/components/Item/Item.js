import React from 'react'
import { Link } from 'react-router-dom'


function Item(props) {

    return (
        <div className="col-md-4" >
            <Link to={`/${props.id}`} style={{ textDecoration: 'none' }}>
                <div className="card-item" key={props.index}>
                    <img className="card-img" src={props.image} alt="..." />
                    <hr className="w-75 mx-auto" />
                    <div className="card-content">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">${props.price}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Item
