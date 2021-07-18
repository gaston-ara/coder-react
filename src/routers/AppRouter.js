import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../pages/home/Home'
import Cart from '../pages/cart/Cart'
import NavBar from '../components/navbar/NavBar'
import Footer from '../components/footer/Footer'

function AppRouter() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/cart" component={Cart} />
                <Route path="/login" component={Home } />
                <Route exact path="/" component={Home} />
                <Route path="/:product_id" component={Home } />
                <Route path="*" component={Home } />
            </Switch>
            <Footer />
        </Router>
    )
}

export default AppRouter
