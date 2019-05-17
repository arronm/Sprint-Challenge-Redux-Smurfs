import { GET_SMURFS_START } from '../actions';

const initialState = {
  smurfs: [],
  asyncAction: false,
  error: null,
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SMURFS_START:
      console.log('smurfs start');
      return state;
    default:
      return state;
  }
}

export default rootReducer;
