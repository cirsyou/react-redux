const addReducer = (state = {name: '123'}, action) => {
  switch (action.type) {
    case 'ADD':
      return {...state, list: [{name: 'add'}]};
    default:
      return state;
  }
}

export default addReducer;
