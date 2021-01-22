import axios from 'axios';

// ACTION TYPES;
const FETCH_ALL_CAMPUS = "FETCH_ALL_CAMPUS";

// ACTION CREATORS;
const fetchAllCampus= campus => {
  return {
    type: FETCH_ALL_CAMPUS,
    payload: campus
  }
}

// THUNK CREATORS;
export const fetchAllCampusThunk = () => dispatch => {
    console.log('Thunk')
  return axios
    .get('http://localhost:1234/api/campus')
    .then(res => res.data)
    .then(res => console.log('response', res.data))
    .then(campus => dispatch(fetchAllCampus(campus)))
    
    .catch(err => console.log(err))
}

// REDUCER;
const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_CAMPUS:
      return action.payload;
    default:
      return state;
  }
}

export default reducer;