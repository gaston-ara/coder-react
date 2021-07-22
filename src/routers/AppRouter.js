import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../pages/home/Home'
import Cart from '../pages/cart/Cart'
import NavBar from '../components/navbar/NavBar'
import Footer from '../components/footer/Footer'
import Error from '../pages/error/Error'
import Detalle from '../pages/detalle/Detalle'
import Login from '../pages/login/Login'
import CategoriesBar from '../components/categoriesbar/CategoriesBar'
import Categories from '../pages/categories/Categories'

function AppRouter() {
    return (
        <Router>
            <NavBar />
            <CategoriesBar/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/cart" component={Cart} />
                <Route path="/login" component={Login} />
                <Route path="/category/:categoryId" component={Categories}/>
                <Route path="/:product_id" component={Detalle}/>
                <Route exact path="*" component={Error} />
            </Switch>
            <Footer />
        </Router>
    )
}

export default AppRouter
