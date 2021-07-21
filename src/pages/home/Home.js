import React from 'react'
import Carrusel from '../../components/carrusel/Carrusel'
import BannerInfo from '../../components/banner-info/BannerInfo'
import ItemListContainer from '../../components/itemlistcontainer/ItemListContainer'
import Contacto from '../../components/contacto/Contacto'
import ItemDetailContainer from '../../components/itemdetail/ItemDetailContainer'

function Home() {
    return (
        <div>
            <Carrusel />
            <BannerInfo />
            <ItemListContainer greetings="Productos destacados" />
            <ItemDetailContainer/>
            <Contacto />
        </div>
    )
}

export default Home
