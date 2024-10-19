import React from 'react';
import VerificarDesconto from './components/VerificarDesconto';
import './App.css'

function App() {
  const descontoAplicado = true;

  return (
    
      <VerificarDesconto temDesconto={descontoAplicado} />
    
  )
}

export default App