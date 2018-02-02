import {combineReducers} from 'redux';

import tracks from './tracks'; //импортируем редьюсер
import playlists from './playlists'; //импортируем редьюсер
import filterTracks from './filterTracks'; //импортируем редьюсер


export default combineReducers({
  tracks,
  playlists,
  filterTracks
});