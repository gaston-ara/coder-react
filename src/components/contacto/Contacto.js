import React from 'react'

function Contacto() {
    return (
        <div className="contact-container">
            <h2 id="contacto">Contacto</h2>
            <form className="contact-form" action="">
                    <input type="text" placeholder="Nombre" />
                    <input type="text" placeholder="Apellido" />
                    <input type="email" placeholder="Email" />
                    <textarea placeholder="Escriba su mensaje" id="" cols="30" rows="10"></textarea>
                    <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Contacto
