import React from 'react';
import ReactDOM from "react-dom";
import {createStore} from 'redux';
import allReducers from './reducers';

const store = createStore(allReducers); //в стор можно передавать только 1 объект

ReactDOM.render(
  <h2>Example</h2>,
  document.getElementById('fieldToShow')
);
