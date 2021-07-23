import React from "react";
import Item from '../Item/Item'
import Spinner from '../spinner/Spinner'

function ItemList({datos}) {
    return (
        <div className="row d-flex justify-content-center itemlist">
            {datos.length === 0 ? (<Spinner/>) : (datos.map((value, index) => {
                return <Item key={index} id={value.id} image={value.thumbnail} title={value.title} price={value.price} stock={value.available_quantity} />
            }))
            }
        </div>
    )
};

export default ItemList;