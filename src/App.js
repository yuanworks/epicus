import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Task from './components/task';
import Epic from './components/epic';
import { MainContainer } from './components/layout/main_container';

import  * as SettingsActions from '../src/redux/actions/settingsActions';
import * as SettingsSelectors from './redux/selectors/settingsSelector';
import SETTINGS from './constants/settings';

class App extends Component {
  render() {
    return (
      <MainContainer theme={this.props.theme}>
        <Epic title="November's Bills">
          <Task status='to do'>Pay Rent</Task>
          <Task status='done'>Pay Buliding Admin</Task>
          <Task>Pay dad's Insurance</Task>
        </Epic>

        <button onClick={() => this.props.settingsActions.setTheme(SETTINGS.Themes.Dark)}>Dark mode</button>
        <button onClick={() => this.props.settingsActions.setTheme(SETTINGS.Themes.Default)}>Default mode</button>
        
      </MainContainer>   
    );
  }
}

const mapStateToProps = state => ({
  theme: SettingsSelectors.getTheme(state),
})

const mapDispatchToProps = dispatch => ({
  settingsActions: bindActionCreators(SettingsActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
