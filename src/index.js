// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

import {createStore} from 'redux'; //импорт функции, которая создает стор

function playlist(state = [], action) { //state - текущее состояние, action - событие
  if (action.type === 'ADD_TRACK') {
    return [
      ...state,
      action.payload
    ];
  };
  return state;
} //получаем экшены и меняем стор

//Store - это наше хранилище всех данных в приложении. Он неизменяем, всегда создается новая копия

const store = createStore(playlist); //создаем новый store для приложения, передаем в него ф-ю, которую его меняет

console.log(store.getState()); //вывод содержимого стора

store.subscribe(() => { //callback, который выстрелит, если у нас поменяется значение в store
  console.log('subscribe', store.getState());
}); // подписаться на изменение нашего store, чтобы знать, что у нас изменились данные в нем.

store.dispatch({type: 'ADD_TRACK', payload: 'Smells like spirit'}); //dispatch - вызов объекта, action, единственный способ поменять значение в store; type - его тип, обязательный элемент, payload - поле данных
store.dispatch({type: 'ADD_TRACK', payload: 'Enter Sandman'});


// const initialState = {
//   name: 'Paul',
//   secondName: 'Petrov'
// };

// function reducer(state = initialState, action) {
//   console.log(state);
//   console.log(action);
// }

// const peopleStore = createStore(reducer);

// const changeName = {
//   type: 'CHANGE_NAME',
//   payload: 'Ivan'
// };

// const changeSecondName = {
//   type: 'CHANGE_SECOND_NAME',
//   payload: 'Ivanov'
// };

// peopleStore.dispatch(changeName); //action