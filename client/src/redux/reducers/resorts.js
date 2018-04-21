import axios from 'axios';

const initialState = {
  resorts: [],
  resortsObj: {},
  user: {}
}

const GET_RESORTS = 'GET_RESORTS'
const SAVE_USER = 'SAVE_USER'

export default function resorts(state = initialState, action) {
  switch (action.type) {
    case SAVE_USER:
      return { ...state, user: action.payload.data }
    case GET_RESORTS + '_FULFILLED': 
      let resortsObj = action.payload.data.reduce((obj, resort) => {
        obj[resort.id] = resort
        return obj
      }, {})

      return { user: state.user, resorts: action.payload.data, resortsObj}
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

export function saveUser(user) {
  return {
    type: SAVE_USER,
    payload: user
  }
}