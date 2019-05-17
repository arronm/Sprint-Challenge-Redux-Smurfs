import axios from 'axios';

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
