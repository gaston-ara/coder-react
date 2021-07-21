import React from "react";
import Item from '../Item/Item'
import Spinner from '../spinner/Spinner'

function ItemList({datos}) {
    return (
        <div className="row d-flex justify-content-center">
            {datos.length === 0 ? (<Spinner/>) : (datos.map((value, index) => {
                return <Item key={index} id={value.id} image={value.imagen} title={value.titulo} price={value.precio} stock={value.stock} />
            }))
            }
        </div>
    )
};

export default ItemList;