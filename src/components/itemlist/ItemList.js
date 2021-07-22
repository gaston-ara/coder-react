import React from "react";
import Item from '../Item/Item'
import Spinner from '../spinner/Spinner'
import {Link} from 'react-router-dom'

function ItemList({datos}) {
    return (
        <div className="row d-flex justify-content-center">
            {datos.length === 0 ? (<Spinner/>) : (datos.map((value, index) => {
                return <Link to={`/${value.id}`} style={{textDecoration:'none'}}><Item key={index} id={value.id} image={value.thumbnail} title={value.title} price={value.price} stock={value.available_quantity} /></Link>
            }))
            }
        </div>
    )
};

export default ItemList;