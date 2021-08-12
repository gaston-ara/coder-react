import React from 'react'

function FormularioEnvio(props) {
    return (
        <div className="form-datos-container">
            <h4>Datos de envio</h4>
            <form onSubmit={props.submit} className="form-datos" action="">
                <input className="input-envio" type="text" name="name" id="name" placeholder="Nombre y Apellido" required/>
                <input className="input-envio" type="text" name="address" placeholder="Dirección" required/>
                <input className="input-envio" type="text" name="city" placeholder="Ciudad" required/>
                <input className="input-envio" type="text" name="province" placeholder="Provincia" required/>
                <input className="input-envio" type="text" name="cp" placeholder="Código Postal" required/>
                <input className="input-envio" type="text" name="dni" placeholder="DNI" required/>
                <input className="input-envio" type="tel" name="tel" id="tel" placeholder="Teléfono" required/>
                <input className="input-envio" type="email" name="email" id="email" placeholder="Email" required/>
                <input className="btn-comprar" type="submit" value="Comprar" />
            </form>
        </div>
    )
}

export default FormularioEnvio
