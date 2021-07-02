import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import CartWidget from './CartWidget.js'

function NavBar() {
    return (
        <div className="fixed-nav">
             <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#">ModernClix</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#">Inicio</Nav.Link>
                    <Nav.Link href="#">Catálogo</Nav.Link>
                    <Nav.Link href="#">Contacto</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#">Iniciar sesión</Nav.Link>
                    <Nav.Link href="#"><CartWidget /></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </div>
       
    );

}

export default NavBar;