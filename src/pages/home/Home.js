import React from 'react'
import Carrusel from '../../components/carrusel/Carrusel'
import BannerInfo from '../../components/banner-info/BannerInfo'
import ItemListContainer from '../../components/itemlistcontainer/ItemListContainer'
import Contacto from '../../components/contacto/Contacto'

function Home(props) {
    return (
        <div>
            <Carrusel />
            <BannerInfo />
            <ItemListContainer greetings="Productos" params={props.params} />
            <Contacto />
        </div>
    )
}

export default Home
