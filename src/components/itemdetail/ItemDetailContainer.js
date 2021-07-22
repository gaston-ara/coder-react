import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

function ItemDetailContainer() {
    const [data, setData] = useState([])
    let { product_id } = useParams();

    
    useEffect(() => {
        fetch(`https://api.mercadolibre.com/items/${product_id}?include_attributes=all`)
            .then(res => res.json())
            .then(res => {
                setData(res)
            })
            .catch(res => console.log(res))
    }, [product_id])
console.log(data);
    return (
        <div className="container detail-container">
            <ItemDetail item={data} />
        </div>
    )
}

export default ItemDetailContainer
