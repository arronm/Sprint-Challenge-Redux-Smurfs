import axios from 'axios';

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const GET_SMURFS_START = 'GET_SMURFS_START';
export const GET_SMURFS_SUCCESS = 'GET_SMURFS_SUCCESS';
export const GET_SMURFS_FAIL = 'GET_SMURFS_FAIL';
export const getSmurfs = () => dispatch => {
  dispatch({
    type: GET_SMURFS_START,
  });
  axios.get('http://localhost:3333/smurfs')
    .then(({ data: payload }) => {
      dispatch({
        type: GET_SMURFS_SUCCESS,
        payload,
      });
    })
    .catch(({ response }) => {
      dispatch({
        type: GET_SMURFS_FAIL,
        payload: {
          status: response.status,
          text: response.statusText,
        }
      })
    });
}


export const POST_SMURF_START = 'POST_SMURF_START';
export const POST_SMURF_SUCCESS = 'POST_SMURF_SUCCESS';
export const POST_SMURF_FAIL = 'POST_SMURF_FAIL';
export const postSmurf = (smurf) => dispatch => {
  dispatch({
    type: POST_SMURF_START,
  });
  axios.post('http://localhost:3333/smurfs/', smurf)
    .then(({ data: payload }) => {
      dispatch({
        type: POST_SMURF_SUCCESS,
        payload,
      });
    })
    .catch(({ response }) => {
      dispatch({
        type: POST_SMURF_FAIL,
        payload: {
          status: response.status,
          text: response.statusText,
        },
      });
    });
}
