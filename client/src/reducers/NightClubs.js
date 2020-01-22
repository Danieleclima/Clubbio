import {combineReducers} from "redux"

const rootReducer = combineReducers({
    nightclubs: nightClubsReducer,
    user: userReducer
})

export default rootReducer

function nightClubsReducer(state = {nightclubs: []}, action) {
    debugger
    switch (action.type){
        case 'ADD_NIGHTCLUBS':
            let nightclubs = action.nightclubs
          return {...state.nightclubs, nightclubs}
    default:
        return state
}}

function userReducer(state = {user: []}, action){
    switch (action.type){
        case 'ADD_USER_LOCATION':
            // debugger
            let coord = action.location.coords
            return {...state.user, coord}
        
        default:
            return state
    }
}