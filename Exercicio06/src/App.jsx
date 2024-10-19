import VerificarNota from './components/VerificarNota';
import './App.css'

function App() {
  const notaAluno = 95;

  return (
    <>
      <div>
      <VerificarNota nota={notaAluno}/>
      </div>
    </>
  )
}

export default App