import React from 'react'
import Nav from 'react-bootstrap/Nav'
import {Link} from 'react-router-dom'

function CategoriesBar() {
    return (
        <Nav className="categories-bar">
            <div className="container">
                    <Link to="/category/MLA1648" className="categoria">Computación</Link>
                    <Link to="/category/MLA1144" className="categoria">Consolas y Videojuegos</Link>
                    <Link to="/category/MLA1000" className="categoria">Electrónica, Audio y Video</Link>
            </div>
        </Nav>
    )
}

export default CategoriesBar
