const options = (request, formData) => {
    return {
        method: request,
        //   mode:'no-cors',
        headers: {
            'Content-Type': "application/json",
            Accept: "application/json"
        },
        credentials: 'include',
        //   Origin: "http://localhost:3000/signup",
        body: JSON.stringify(formData)
    }
}


export const addUserLocation = location => {
    return {
        type: 'ADD_USER_LOCATION',
        location: location
    }
}

export const createUser = user => {
    return (dispatch) => {
        if (user) {
            dispatch({ type: 'START_CREATING_USER' });
            let targetUrl = `http://localhost:3001/users`;
            // Post the user to the Rails API user controller
            fetch(targetUrl, options("POST", { user: user }))
                // returning user from the Rails API
                .then(u => {
                    debugger
                    return u.json()
                })
                .then(current_user => {
                    console.log('c')
                    debugger
                    // sending the returned user to the Redux userReducer
                    dispatch({ type: 'CREATE_USER', user: current_user })
                })
        }
    }
}

// export const createUserfromOmniauth = provider => {
//     return (dispatch) => {
//         dispatch({ type: 'START_CREATING_USER' });
//         // URL corresponding to the relevant Social Network
//         debugger
//         // let targetUrl = `http://localhost:3001/users/auth/${provider}`;
//         fetch(`http://localhost:3001/users/auth/${provider}`, {
//             method: "GET",
//             headers: {
//                 'Access-Control-Allow-Origin': '*',
//               },
//               mode: 'cors',
//               redirect: 'follow'
//             // credentials: 'include'
//         })
//             // returning user from the Rails API
//             .then(u => {
//                 debugger
//                 return u.json()
//             })
//             .then(current_user => {
//                 console.log('c')
//                 // sending the returned user to the Redux userReducer
//                 dispatch({ type: 'CREATE_USER', user: current_user })
//             })
//             .catch((error) => {
//                 console.log(error);
//             });
//     }
// }

export const checkLoginStatus = () => {
    debugger
    return (dispatch) => {
        dispatch({ type: 'START_CHECKING' });
        fetch(`http://localhost:3001/logged_in`, {
            method: "GET",
            headers: {
                'Content-Type': "application/json",
                Accept: "application/json"
            },
            credentials: 'include'
        })
            .then(user => {
                return user.json()
            })
            .then(current_user => {
                debugger
                dispatch({ type: 'ADD_LOGGED_IN_USER', user: current_user })
            })
            .catch(error => {
                debugger
                console.log(error)
            })

    }
}