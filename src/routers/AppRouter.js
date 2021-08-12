import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../pages/home/Home'
import Cart from '../pages/cart/Cart'
import NavBar from '../components/navbar/NavBar'
import Footer from '../components/footer/Footer'
import Error from '../pages/error/Error'
import Detalle from '../pages/detalle/Detalle'
import Checkout from '../pages/checkout/Checkout'


function AppRouter() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/cart" component={Cart} />
                <Route exact path="/checkout" component={Checkout} />
                <Route exact path="/category/:categoryId" component={Home} />
                <Route exact path="/:product_id" component={Detalle} />
                <Route exact path="*" component={Error} />
            </Switch>
            <Footer />
        </Router>
    )
}

export default AppRouter
