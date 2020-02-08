const options = (request, formData) => {
    return {  method: request,
            //   mode:'no-cors',
              headers: {
                  'Content-Type': "application/json",
                  Accept: "application/json"
              },
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