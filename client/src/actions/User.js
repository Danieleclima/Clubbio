const options = (method, formData) => {
    return {  method: method,
              headers: {
                  'Content-Type': "application/json",
                  Accept: "application/json"
              },
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
        dispatch ({type: 'START_CREATING_USER'});
        let proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        let targetUrl = `http://localhost:3001/users`;
        fetch(proxyUrl + targetUrl, options("POST", user))
        .then(user => {
            debugger
            dispatch({type: 'CREATE_USER', user: user})})    
    }}
}