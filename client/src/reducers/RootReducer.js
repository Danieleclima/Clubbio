import {combineReducers} from "redux"



const rootReducer = combineReducers({
    nightclubs: nightClubsReducer,
    user: userReducer
})

export default rootReducer

function nightClubsReducer(state = {}, action) {
    
    switch (action.type){
        case 'ADD_NIGHTCLUBS':
            let nightclubs = action.nightclubs
            // debugger
          return {...state.nightclubs, nightclubs}
    default:
        return state
}}

function userReducer(state = {user: {logged_in: false}}, action){
    let current_user = {}
    switch (action.type){
        case 'ADD_USER_LOCATION':
            // debugger
            let coords = action.location.coords
            return {...state.user, coords}
        case 'CREATE_USER':
            debugger
            current_user = action.user
            state.logged_in = true
            return {...state.user, current_user}
        case  'ADD_LOGGED_IN_USER':
            current_user = action.user
            if(state.user){
            state.user.logged_in = action.user.logged_in} 
            return {...state.user, current_user}
        default:
            return state
    }
}