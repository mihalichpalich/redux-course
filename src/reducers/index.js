import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import tracks from './tracks'; //импортируем редьюсер
import playlists from './playlists'; //импортируем редьюсер
import filterTracks from './filterTracks'; //импортируем редьюсер


export default combineReducers({
  routing: routerReducer,
  tracks,
  playlists,
  filterTracks
});