import React, { Component } from 'react';
import Task from './components/task';
import Epic from './components/epic';
import { MainContainer } from './components/layout/main_container';

class App extends Component {
  render() {
    return (
      <MainContainer>
        <Epic title="November's Bills">
          <Task status='to do'>Pay Rent</Task>
          <Task status='done'>Pay Buliding Admin</Task>
          <Task>Pay dad's Insurance</Task>
        </Epic>
      </MainContainer>
    );
  }
}

export default App;
