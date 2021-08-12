import React, { useState, useEffect } from 'react'
import ItemList from '../itemlist/ItemList'
import { getFirestore } from '../../Firebase'
import { useParams } from 'react-router-dom'

function ItemListContainer(props) {

    const [datos, setData] = useState([]);
    const { categoryId } = useParams()

    const getProducts = () => {

        const firestore = getFirestore()
        const collection = firestore.collection("productos")


        if (!categoryId) {

            const query = collection.get()
            const docs = []

            query
                .then(resultado => {
                    resultado.forEach(documento => {
                        docs.push({ ...documento.data(), id: documento.id })
                    })
                    setData(docs);
                })

        } else {
            let query = collection.where("categoryId", "==", categoryId);
            query = query.get()

            query
                .then((snapshot) => {
                    const documentos = snapshot.docs
                    const productos = documentos.map((doc) => {
                        return { id: doc.id, ...doc.data() }
                    })
                    setData(productos)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    };

    useEffect(() => {
        getProducts();
    }, [categoryId])

    return (
        <div className="container">
            <h2 className="shop-title" id="catalogo">{props.greetings}</h2>
            <div className="catalogo">
                <div className="row">
                    <div><ItemList datos={datos} /></div>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer;
