import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const initialState = [
  'Smells like spirit',
  'Enter Sandman'
];

function playlist(state = initialState, action) {
  if (action.type === 'ADD_TRACK') {
    return [
      ...state,
      action.payload
    ];
  };
  return state;
}

const store = createStore(playlist);

// передаем стор в качестве параметра с помощью компонента provider
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

// import {createStore} from 'redux';

// function playlist(state = [], action) {
//   if (action.type === 'ADD_TRACK') {
//     return [
//       ...state,
//       action.payload
//     ];
//   };
//   return state;
// }

// const store = createStore(playlist);

// const addTrackBtn = document.querySelectorAll('.addTrack')[0];
// const trackInput = document.querySelectorAll('.trackInput')[0];
// const list = document.querySelectorAll('.list')[0];

// store.subscribe(() => {
//   list.innerHTML = '';
//   trackInput.value = '';
//   store.getState().forEach(track => {
//     const li = document.createElement('li');
//     li.textContent = track;
//     list.appendChild(li);
//   });
// });

// addTrackBtn.addEventListener('click', () => {
//   const trackName = trackInput.value;
//   store.dispatch({type: 'ADD_TRACK', payload: trackName});
// });

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