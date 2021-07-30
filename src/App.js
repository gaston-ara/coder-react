import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

// Componentes importados
import AppRouter from './routers/AppRouter'
import CartProvider, { CartContext } from './context/Contexto'


function App() {
  console.log(CartContext);
  return (
    <div className="App">
      <CartProvider>
        <AppRouter />
      </CartProvider>
    </div>
  );
}

export default App;
