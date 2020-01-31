import {combineReducers} from "redux"

const options = (method, formData) => {
  return {  method: method,
            headers: {
                'Content-Type': "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(formData) 
        }   
}

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
        case 'CREATE_USER':
                // debugger
            let current_user = action.user
            fetch('http://localhost:3001/users', options("POST", current_user))
            return {...state.user, current_user}        
        
        default:
            return state
    }
}