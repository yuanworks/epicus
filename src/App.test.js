import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import ConnectedApp from './App';

import { render } from 'react-testing-library';

// -- redux --
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers';

function renderWithRedux(ui, { initialState, store = createStore(rootReducer, initialState) } = {} ) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store
  }
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("Theme buttons", () => {

  it ('has a dark mode button', () => {
    const { getByText, debug } = renderWithRedux(<ConnectedApp />);
    const darkModeButton = getByText("Dark mode");
    const textDarkModeButton = darkModeButton.textContent;
    expect(textDarkModeButton).toBe("Dark mode");

    darkModeButton.click();
    // debug(); <-- this actually shows the dark mode is on!
  });

  it ('has a default theme button', () => {
    const { getByText } = renderWithRedux(<ConnectedApp />);
    const defaultModeButton = getByText("Default mode");
    expect (defaultModeButton.textContent).toBe("Default mode");
  });
})
