import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { render } from 'react-testing-library';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("Theme buttons", () => {

  it ('has a dark mode button', () => {
    const { getByText } = render(<App />);
    const darkModeButton = getByText("Dark mode");
    const textDarkModeButton = darkModeButton.textContent;
    expect(textDarkModeButton).toBe("Dark mode");

    // click won't work as the store needs to be mocked
    //darkModeButton.click();
  });

  it ('has a default theme button', () => {
    const { getByText } = render(<App />);
    const defaultModeButton = getByText("Default mode");
    expect (defaultModeButton.textContent).toBe("Default mode");
  });
})
