import React from 'react';
import '../src/styles/main.scss'
import FilterBar from './components/FilterBar/FilterBar';

function App() {
  return (
    <div className="main-layout">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <FilterBar />
    </div>
  );
}

export default App;
