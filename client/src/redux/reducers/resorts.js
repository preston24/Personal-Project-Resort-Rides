import axios from 'axios';

const initialState = {
  resorts: [],
  resortsObj: {}
}

const GET_RESORTS = 'GET_RESORTS'

export default function resorts(state = initialState, action) {
  switch (action.type) {
    case GET_RESORTS + '_FULFILLED': 
      let resortsObj = action.payload.data.reduce((obj, resort) => {
        obj[resort.id] = resort
        return obj
      }, {})

      return { resorts: action.payload.data, resortsObj}
    default:
      return state
    }
}

export function getResorts() {
  return {
    type: GET_RESORTS,
    payload: axios.get('/api/resorts')
  }
}