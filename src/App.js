import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Task from './components/task';
import Epic from './components/epic';

class App extends Component {
  render() {
    return (

      <>
        <Epic title="November's Bills">
          <Task status='to do'>Pay Rent</Task>
          <Task status='done'>Pay Buliding Admin</Task>
          <Task>Pay dad's Insurance</Task>
        </Epic>

        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload. Mwahaha!
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
        </div>
      </>

    );
  }
}

export default App;
