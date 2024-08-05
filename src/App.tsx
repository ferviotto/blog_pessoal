import Home from './paginas/home/Home';
import './App.css';
import React from 'react';

function App() {
 
  return (
    <>
      <Home/>
    </>
  );
}

export default App;

/*import Home from './paginas/home/Home';
import './App.css';
import React from 'react';

function App() {
 
  return (
    <>
      <Home/>
    </>
  );
}

export default App;*/

/*import Home from './paginas/home/Home';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [valor, setValor] = useState(0);

  function handleClick() {
    setValor(valor + 1);
  }
  return (
    <div>
      <p>O valor é: {valor}</p>
      <button onClick={handleClick}>Adicionar 1</button>
    </div>
  );
}

export default App; */

/*import React from 'react';
import Home from './paginas/home/Home';
import './App.css';


function App() {
  return (
   <Home  title="Componente Home"
          description="Este é um componente Home que recebe props."/>
  );
}

export default App; */