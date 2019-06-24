import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomeContainer from './containers/HomeContainer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HomeContainer/>
      </header>
    </div>
  );
}

export default App;
