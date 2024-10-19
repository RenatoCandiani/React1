import React from 'react';
import VerificarEstudante from './components/VerificarEstudante';
import './App.css'

function App() {
  const verificacao = true;
  return (
    <div>
      <VerificarEstudante estudante={verificacao}/>
    </div>
  )
}

export default App