import {combineReducers} from 'redux';

import tracks from './tracks'; //импортируем редьюсер
import playlists from './playlists'; //импортируем редьюсер

export default combineReducers({
  tracks,
  playlists
});