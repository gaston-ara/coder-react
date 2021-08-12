import React from 'react'
import Carrusel from '../../components/carrusel/Carrusel'
import BannerInfo from '../../components/banner-info/BannerInfo'
import ItemListContainer from '../../components/itemlistcontainer/ItemListContainer'

function Home(props) {
    return (
        <div>
            <Carrusel />
            <BannerInfo />
            <ItemListContainer greetings="Productos" params={props.params} />
        </div>
    )
}

export default Home
