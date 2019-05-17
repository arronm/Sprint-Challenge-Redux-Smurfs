/*
  Be sure to import in all of the action types from `../actions`
*/

const initialState = {
  smurfs: [],
  asyncAction: false,
  error: null,
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default rootReducer;
