import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

// Componentes importados
import NavBar from './components/navbar/NavBar.js';
import ItemListContainer from './components/itemlistcontainer/ItemListContainer'
import Carrusel from './components/carrusel/Carrusel'
import BannerInfo from './components/banner-info/BannerInfo'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Carrusel/>
      <BannerInfo/>
      <ItemListContainer greetings="Productos"/>
    </div>
  );
}

export default App;
