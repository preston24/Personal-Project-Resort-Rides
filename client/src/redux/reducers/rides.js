import axios from 'axios';

const initialState = {
  rides: [],
}

const BOOK_RIDE = 'BOOK_RIDE'
const GET_RIDES = 'GET_RIDES'
const ADD_RIDE = 'ADD_RIDE'
const DELETE_RIDE = 'DELETE_RIDE'

export default function rides(state = initialState, action) {
  switch (action.type) {
    case GET_RIDES + '_FULFILLED':
      return { ...state, rides: action.payload }
    case BOOK_RIDE + '_FULFILLED': 
      return { ...state, rides: action.payload }
    case ADD_RIDE + '_FULFILLED':
      return state
      return { ...state, rides: action.payload }
    case DELETE_RIDE + '_FULFILLED':
    return { ...state, rides: action.payload }
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

export function addRide(seats, price, time, resortId, userId) {
  console.log('userId', userId)
  return {
    type: ADD_RIDE,
    payload: axios.post('/api/rides', {
      seats,
      price, 
      time, 
      resortId,
      userId
    }).then(response => {
      return response.data
    })
  }
}

export function deleteRide(id) {
  console.log('id', id)
  return {
    type: DELETE_RIDE,
    payload: axios.delete(`/api/rides/${id}`)
  }
}