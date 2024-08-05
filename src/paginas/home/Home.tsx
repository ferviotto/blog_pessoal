import React, { useState } from 'react';

function Home() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      {loggedIn ? (
        <h1>Bem-vindo de volta!</h1>
      ) : (
        <button onClick={() => setLoggedIn(true)}>Entrar</button>
      )}
    </div>
  );
}
export default Home;

/*import React, { useState, useEffect } from 'react';

function Home() {
  const [completed, setCompleted] = useState(false);
  const [tarefa, setTarefa] = useState('');

  useEffect(() => {
    if (completed) {
      setTarefa('Parabéns! Você concluiu a tarefa!');
    }
  }, [completed]);

  return (
    <div>
      <h1>Tarefa</h1>
      <h3>{tarefa}</h3>
      <p>Conclua a tarefa</p>
      <button onClick={() => setCompleted(true)}>Concluir Tarefa</button>
    </div>
  );
}

export default Home;*/

/*import React from 'react';
import './Home.css';

function Home(){
    return (
        <>
            <h1 className="titulo">Home</h1>
            <img src="https://www.estadao.com.br/resizer/v2/CPAVWU2WLRBVFA6WU5BHTK5M2E.jpg?quality=80&auth=ea915c4ede2d3042d8e39b1c8f72a843cbc79dad83d5bbd7c45fa209a6213fcb&width=1200" alt="Imagem Tela Inicial" className="img"/>
        </>
    );
}

export default Home;*/