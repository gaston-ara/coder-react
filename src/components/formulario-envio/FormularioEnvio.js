import React from 'react'

function FormularioEnvio(props) {
    return (
        <div className="form-datos-container">
            <h4>Datos de envio</h4>
            <form onSubmit={props.submit} className="form-datos" action="">
                <input className="input-envio" type="text" name="name" id="name" placeholder="Nombre y Apellido" />
                <input className="input-envio" type="text" name="address" placeholder="Dirección" />
                <input className="input-envio" type="text" name="city" placeholder="Ciudad" />
                <input className="input-envio" type="text" name="province" placeholder="Provincia" />
                <input className="input-envio" type="text" name="cp" placeholder="Código Postal" />
                <input className="input-envio" type="text" name="dni" placeholder="DNI" />
                <input className="input-envio" type="tel" name="tel" id="tel" placeholder="Teléfono" />
                <input className="input-envio" type="email" name="email" id="email" placeholder="Email" />
                <input className="btn-comprar" type="submit" value="Comprar" />
            </form>
        </div>
    )
}

export default FormularioEnvio
