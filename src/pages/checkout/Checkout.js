import React, { useEffect, useState } from 'react'
import FormularioEnvio from '../../components/formulario-envio/FormularioEnvio';
import { useCartContext } from '../../context/Contexto'
import { getFirestore } from '../../Firebase';

function Checkout() {

    const { cartItems, clear } = useCartContext();
    const [compraFinalizada, setcompraFinalizada] = useState(false)
    const [ordenId, setordenId] = useState("")
    const [itemsOrden, setitemsOrden] = useState([])

    useEffect(() => {
        setitemsOrden(cartItems.map((value) => {
            return ({
                id: (value.id),
                title: (value.title),
                price: (value.price)
            })
        }))
    }, [])

    const submit = (e) => {
        e.preventDefault()
        let nombre = document.getElementById("name")
        let tel = document.getElementById("tel")
        let email = document.getElementById("email")
        let fecha = new Date();
        let totalCart = 0;

        for (let item in cartItems) {
            totalCart += cartItems[item].price * cartItems[item].qty;
        }

        const nueva_orden = {
            buyer: {
                name: nombre.value,
                phone: tel.value,
                email: email.value
            },
            ordenes: itemsOrden,
            date: fecha,
            total: totalCart
        }

        const firestore = getFirestore()
        const collection = firestore.collection("ordenes")
        const query = collection.add(nueva_orden)
        query
            .then((resultado) => {
                setordenId(resultado.id)
            })
        setcompraFinalizada(true);
        clear()
    }

    return (
        <div className="container checkout-container">
            {!compraFinalizada || !ordenId ? (
                <FormularioEnvio submit={submit} />
            ) : (
                <div className="resumen">
                    <h4>Tu compra fue realizada con exito</h4>
                    <p>Numero de orden: {ordenId}</p>
                </div>
            )}
        </div>
    )
}

export default Checkout
