import React from 'react';
import './App.scss';

import PokemonForm from './components/PokemonForm';
import Pokemon from './components/Pokemon';

function App() {
  return (
    <div className="App">
      <h1>App!</h1>
      <PokemonForm />
      <Pokemon />
    </div>
  );
}

export default App;
