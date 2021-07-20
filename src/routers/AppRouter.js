import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../pages/home/Home'
import Cart from '../pages/cart/Cart'
import NavBar from '../components/navbar/NavBar'
import Footer from '../components/footer/Footer'
import Error from '../pages/error/Error'
import Detalle from '../pages/detalle/Detalle'
import Login from '../pages/login/Login'

function AppRouter() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/cart" component={Cart} />
                <Route path="/login" component={Login} />
                <Route exact path="*" component={Error} />
                <Route path="/:product_id" component={Detalle}/>
            </Switch>
            <Footer />
        </Router>
    )
}

export default AppRouter
