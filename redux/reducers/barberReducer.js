import { combineReducers } from 'redux'
import { FETCH } from '../actions/barber'

const barber = (state = {}, action) => {
  switch (action.type) {
    case FETCH:
      return action.payload
    default:
      return state
  }
}

const rootReducer = combineReducers({
  barber
})

export default rootReducer