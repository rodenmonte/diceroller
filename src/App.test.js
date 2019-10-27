import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// This is from create-react-app.
// It's nice to have this automated :D

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
