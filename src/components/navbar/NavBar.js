import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import CartWidget from './CartWidget.js'
import { NavLink } from 'react-router-dom'
import { useCartContext } from '../../context/Contexto'

function NavBar() {
    const { cartCount } = useCartContext()
    return (
        <div className="fixed-nav">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <NavLink style={{ textDecoration: 'none', color: 'white', padding: '9px' }} to="/">ModernClix</NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink style={{ textDecoration: 'none', color: 'white', padding: '9px', marginLeft: '10px' }} to="/">Inicio</NavLink>
                        <NavLink style={{ textDecoration: 'none', color: 'white', padding: '9px' }} to="/#catalogo">Catálogo</NavLink>
                        <NavLink style={{ textDecoration: 'none', color: 'white', padding: '9px' }} to="/#contacto">Contacto</NavLink>
                    </Nav>
                    <Nav>
                        {cartCount ? (
                            <NavLink style={{ textDecoration: 'none', color: 'white', padding: '9px', display: 'flex', alignItems: 'flex-end' }} to="/cart"><CartWidget /><span>({cartCount})</span></NavLink>
                        ) : (
                        <></>
                        )
                        }

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>

    );

}

export default NavBar;