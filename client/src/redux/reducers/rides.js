import axios from 'axios';

const initialState = {
  rides: [],
}

const BOOK_RIDE = 'BOOK_RIDE'
const GET_RIDES = 'GET_RIDES'

export default function rides(state = initialState, action) {
  switch (action.type) {
    case GET_RIDES + '_FULFILLED':
      return { ...state, rides: action.payload }
    case BOOK_RIDE + '_FULFILLED': 
      return { ...state, rides: action.payload}
    default:
      return state
    }
}

export function bookRide(id, seats, resort_id) {
  const newSeats = seats - 1;
  return {
    type: BOOK_RIDE,
    payload: axios.put(`/api/rides/${id}/${newSeats}?resort_id=${resort_id}`).then(response => {
      return response.data
    })
  }
}

export function getRides(id) {
  return {
    type: GET_RIDES,
    payload: axios.get(`/api/ride_resort/${id}`).then(response => {
      return response.data
    })
  }
}