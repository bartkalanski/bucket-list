const initState = {
  destinations: [
      {id: '1', country: 'Indonesia', destination: 'Bali'},
      {id: '2', country: 'Peru', destination: 'Amazon'},
      {id: '3', country: 'Germany', destination: 'Berghain'},
  ],
};

const rootReducer = (state = initState, action) => {
  return state;
};

export default rootReducer;
