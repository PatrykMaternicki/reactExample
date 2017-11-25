import React, { Component } from 'react';
import logo from './logo.svg';
import Example1 from './Component/example1.js';
import Example2 from './Component/example2.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Example1 text="This is my first component" color="blue" whoCreated="Patrick"/>
        <Example1 text="React is cool" color="pink" whoCreated="Damian" />
        <Example1 text="Nie wiem co wpisac" color="red" whoCreated="Ania" />
        <Example2 />
      </div>
    );
  }
}

export default App;
