import React from 'react';
import BotaoLogin from './components/Login';

function App() {
  const usuarioLogado = false;

  return (
    <div>
      <BotaoLogin logado={usuarioLogado} />
    </div>
  );
}

export default App;