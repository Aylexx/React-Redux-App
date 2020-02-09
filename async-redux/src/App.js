import React from 'react';
import './App.scss';

// Components:
import StrainForm from './components/StrainForm';
import StrainsList from './components/StrainsList';

function App() {
  return (
    <div className="App">
      <h1>App!</h1>
      <StrainForm />
      <StrainsList />
    </div>
  );
}

export default App;
