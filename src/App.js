import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

// Componentes importados
import NavBar from './components/navbar/NavBar.js';
import ItemListContainer from './components/itemlistcontainer/ItemListContainer'
import Carrusel from './components/carrusel/Carrusel'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Carrusel/>
      <ItemListContainer greetings="Productos destacados"/>
    </div>
  );
}

export default App;
