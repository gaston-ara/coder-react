import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import { getFirestore } from '../../Firebase'
import { useParams } from 'react-router-dom'

function ItemDetailContainer() {
    const [data, setData] = useState([])
    let { product_id } = useParams();

    const getProducts = () => {
        const firestore = getFirestore()
        const collection = firestore.collection("productos")
        const query = collection.get()
        const docs = []

        query
            .then(resultado => {
                resultado.forEach(documento => {
                    docs.push({ ...documento.data(), id: documento.id });
                    let productosFiltrados = docs.filter((productoFiltrado) => productoFiltrado.id === product_id);
                    setData(productosFiltrados);
                });

            })
    };

    useEffect(() => {
        getProducts();
    }, [product_id])

    return (
        <div className="container detail-container">
            {data.map((item) => {
                return <ItemDetail item={item} key={item.id} />;
            })}
        </div>
    )
}

export default ItemDetailContainer
