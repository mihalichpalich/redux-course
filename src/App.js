import React from 'react';
import { connect } from 'react-redux';

import {getTracks} from './actions/tracks.js'

const App = ({tracks, onAddTrack, onFindTrack, onGetTracks}) => { //получаем tracks и onAddTrack из props
  let trackInput = '';
  let searchInput = '';

  const addTrack = () => {
    console.log('addTrack', trackInput.value);
    onAddTrack(trackInput.value);
    trackInput.value = '';
  }

  const findTrack = () => {
    console.log('findTrack', searchInput.value);
    onFindTrack(searchInput.value);
  }

  return (
      <div>
        <div>
          <input type="text" ref={(input) => {trackInput = input}} />
          <button onClick={addTrack}>Add track</button> {/*экшен вызывается не напрямую из props, поэтому нужен bind*/}
        </div>
        <div>
          <input type="text" ref={(input) => {searchInput = input}} />
          <button onClick={findTrack}>Find track</button>
        </div>
        <div>
          <button onClick={onGetTracks}>Get tracks</button> {/*получаем асинхронно список треков, как будто от API и рендерим их вместо наших треков на странице*/}
        </div>
        <ul>
          {tracks.map((track, index) =>
            <li key={index}>{track.name}</li>
          )}
        </ul>
      </div>
  );
}

export default connect(
  state => ({
    tracks: state.tracks.filter(track => track.name.includes(state.filterTracks))
  }),
  dispatch => ({
    onAddTrack: (name) => {
      const payload = {
        id: Date.now().toString(),
        name
      };
      dispatch({type: 'ADD_TRACK', payload});
    },
    onFindTrack: (name) => {
      console.log('name', name);
      dispatch({type: 'FIND_TRACK', payload: name});
    },
    onGetTracks: () => {
      dispatch(getTracks()); //вместо объекта передаем в dispatch ф-ю, которая возвращает ф-ю с dispatch
    }
  })
)(App);