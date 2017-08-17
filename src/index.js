import React from 'react';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const render = App.render(document.getElementById('root'));

let appState = {
  secondsElapsed: 0,
  todos: [
    {id: 1, text: 'Buy milk'},
    {id: 2, text: 'Go running'},
    {id: 3, text: 'Rest'}
  ]
};

render(appState);

//ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
