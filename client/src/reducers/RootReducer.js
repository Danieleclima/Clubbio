import {combineReducers} from "redux"



const rootReducer = combineReducers({
    nightclubs: nightClubsReducer,
    user: userReducer
})

export default rootReducer

function nightClubsReducer(state = {nightclubs: []}, action) {
    
    switch (action.type){
        case 'ADD_NIGHTCLUBS':
            let nightclubs = action.nightclubs
          return {...state.nightclubs, nightclubs}
    default:
        return state
}}

function userReducer(state = {user: {logged_in: false}}, action){
    switch (action.type){
        case 'ADD_USER_LOCATION':
            // debugger
            let coords = action.location.coords
            return {...state.user, coords}
        case 'CREATE_USER':
            debugger
            let current_user = action.user
            state.logged_in = true
            return {...state.user, current_user}        
        
        default:
            return state
    }
}