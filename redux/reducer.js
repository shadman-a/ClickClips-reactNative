import { combineReducers } from 'redux'

const defaultState = {
    barbers: []
}

function barberReducer(state = defaultState.barbers, action) {

    switch (action.type) {
        case "get_barber":
            console.log("reducer action: ", action)
            return action.payload
        default:
            return state
    }
}

const rootReducer = combineReducers({
    barbers: barberReducer
})

export default rootReducer