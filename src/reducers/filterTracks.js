const initialState = '';

//функция редьюсер
export default function filterTracks(state = initialState, action) { //берем прошлое состояние
  if (action.type === 'FIND_TRACK') {
    return action.payload;
  }

  return state; //возвращаем новое
};

