import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

// Componentes importados
import AppRouter from './routers/AppRouter'


function App() {
  return (
    <div className="App">
      <AppRouter/>
    </div>
  );
}

export default App;
