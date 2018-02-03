const initialState = [];

//функция редьюсер
export default function tracks(state = initialState, action) { //берем прошлое состояние
  if (action.type === 'ADD_TRACK') {
    return [
      ...state,
      action.payload
    ];
  } else if (action.type === 'FETCH_TRACKS_SUCCESS') { //добавим условие 'FETCH_TRACKS_SUCCESS' в редьюсер
    return action.payload;
  };

  return state; //возвращаем новое
};

