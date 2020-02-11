const options = (request, formData) => {
    return {  method: request,
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
        if (user){
        debugger
        dispatch ({type: 'START_CREATING_USER'});
        // let proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        let targetUrl = `http://localhost:3001/users`;
        fetch(targetUrl, options("POST", {user: user}))
        .then(u => {
            return u.json()
        })
        .then(current_user => {
            debugger
            dispatch({type: 'CREATE_USER', user: current_user})    
        })
}
}
}

export const checkLoginStatus = () => {
    debugger
    return (dispatch) => {
        dispatch ({type: 'START_CHECKING'});
        fetch(`http://localhost:3001/logged_in`,{  
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
            dispatch({type: 'ADD_LOGGED_IN_USER', user: current_user})
        })
        .catch(error => {
            debugger
            console.log(error)
        })

    }
}