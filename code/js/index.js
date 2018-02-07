import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './reducers';
import WebPage from './components/WebPage';

const store = createStore(allReducers); //в стор можно передавать только 1 объект

ReactDOM.render(
  <Provider store={store}>
    <WebPage />
  </Provider>,
  document.getElementById('fieldToShow')
);
