import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import R from 'ramda';

import logo from './logo.svg';
import './App.css';
import ToDoList from './TodoList';

const App = appState => (
      <div className="App">
        <p className="App-intro">
          <ToDoList todos={appState.todos} />
        </p>
      </div>
    )

App.render = R.curry((node, props) => ReactDOM.render(<App {...props}/>, node));

export default App;
