import VerificarUsuario from './components/VerificarUsuario'
import './App.css'

function App() {
  const usuario = true;

  return (
    <>
      <VerificarUsuario usuario={usuario}/>
    </>
  )
}

export default App