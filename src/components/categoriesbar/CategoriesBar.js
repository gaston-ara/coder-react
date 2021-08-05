import React from 'react'
import Nav from 'react-bootstrap/Nav'
import {Link} from 'react-router-dom'

function CategoriesBar() {
    return (
        <Nav className="categories-bar">
            <div className="container">
                    <Link to="/category/perifericos" className="categoria">Periféricos</Link>
                    <Link to="/category/notebooks" className="categoria">Notebooks</Link>
                    <Link to="/category/auriculares" className="categoria">Auriculares</Link>
            </div>
        </Nav>
    )
}

export default CategoriesBar
