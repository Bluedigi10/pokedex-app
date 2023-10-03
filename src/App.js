import './styles/App.css';
import './styles/Pokedex.css';
import Pokedex from './components/Pokedex';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <Pokedex></Pokedex>
        </section>
      </header>
    </div>
  );
}

export default App;