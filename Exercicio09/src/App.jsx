import VerificarNivel from './components/VerificarNivel'
import './App.css'

function App() {
  const nivelUsuario = "iniciante";

  return (
    <>
      <VerificarNivel nivel={nivelUsuario} />
    </>
  )
}

export default App