import React, { Component } from 'react';
import { connect } from 'react-redux';
/*import { bindActionCreators } from 'redux';*/
import Task from './components/task';
import Epic from './components/epic';
import { MainContainer } from './components/layout/main_container';

//import  * as ThemeActions from '../src/redux/actions/themeActions';

class App extends Component {
  render() {
    return (
      <MainContainer>
        <Epic title="November's Bills">
          <Task status='to do'>Pay Rent</Task>
          <Task status='done'>Pay Buliding Admin</Task>
          <Task>Pay dad's Insurance</Task>
        </Epic>

        <button onClick={() => this.props.setTheme()}>Dark mode</button>
      </MainContainer>   
    );
  }
}

const mapDispatchToProps = dispatch => {
  /*
  return bindActionCreators ({
    themeActions: ThemeActions
  }
  */

  return {
    setTheme: () => dispatch({ type: 'THEME_SET', payload: {theme: 'dark'}}),
  }
}

export default connect(null, mapDispatchToProps)(App);
