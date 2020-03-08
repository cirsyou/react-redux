const homeReducer = (state = {id: 123}, action) => {
  switch (action.type) {
    case 'ADD_ID':
      return {...state, id: ++state.id}
    default:
      return state;
  }
}

export default homeReducer;
