const initialState = [
  'Smells like spirit',
  'Enter Sandman'
];

//функция редьюсер
export default function tracks(state = initialState, action) { //берем прошлое состояние
  if (action.type === 'ADD_TRACK') {
    return [
      ...state,
      action.payload
    ];
  } else if (action.type === 'DELETE_TRACK') {
    return state;
  };

  return state; //возвращаем новое
};

