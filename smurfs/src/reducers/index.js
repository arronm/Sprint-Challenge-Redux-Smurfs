import {
  GET_SMURFS_START,
  GET_SMURFS_SUCCESS,
  GET_SMURFS_FAIL,
  POST_SMURF_START,
  POST_SMURF_SUCCESS,
  POST_SMURF_FAIL,
  DELETE_SMURF_START,
  DELETE_SMURF_SUCCESS,
  DELETE_SMURF_FAIL
} from '../actions';

const initialState = {
  smurfs: [],
  asyncAction: false,
  error: null,
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_SMURFS_START:
      return {
        ...state,
        asyncAction: action.type,
      };
    case GET_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        asyncAction: false,
      };
    case GET_SMURFS_FAIL:
      return {
        ...state,
        asyncAction: false,
        error: `${action.payload.status} ${action.payload.text}`,
      };

    case POST_SMURF_START:
      return {
        ...state,
        asyncAction: action.type
      }
    case POST_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        asyncAction: false,
      }
    case POST_SMURF_FAIL:
      return {
        ...state,
        asyncAction: false,
        error: `${action.payload.state} ${action.payload.text}`
      }
      
    case DELETE_SMURF_START:
      return {
        ...state,
        asyncAction: action.type
      }
    case DELETE_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        asyncAction: false,
      }
    case DELETE_SMURF_FAIL:
      return {
        ...state,
        asyncAction: false,
        error: `${action.payload.state} ${action.payload.text}`
      }
      
      default:
      return state;
  }
}

export default rootReducer;
