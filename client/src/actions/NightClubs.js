
export function fetchNightClubs(coords) {
    return (dispatch) => {
        if (coords){
        dispatch ({type: 'START_ADDING_NIGHTCLUBS_REQUEST'});
        let proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        let targetUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${coords.latitude},${coords.longitude}&radius=20000&type=night_club&key=AIzaSyDXutd941FQhPL2Nh8upxQZo8rhEAs0Moo`;
        fetch(proxyUrl + targetUrl)
        .then(res => {
            debugger
            return res.json()
          })
        .then(nightclubs => dispatch({type: 'ADD_NIGHTCLUBS', nightclubs: nightclubs.results}))    
    }}
}


// export function fetchNightClubs(id) {
//     return (dispatch) => {
//         dispatch ({type: 'GET_NIGHTCLUB_PICTURES'});
//         let proxyUrl = 'https://cors-anywhere.herokuapp.com/';
//         let targetUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${coords.latitude},${coords.longitude}&radius=20000&type=night_club&key=AIzaSyDXutd941FQhPL2Nh8upxQZo8rhEAs0Moo`;
//         fetch(proxyUrl + targetUrl)
//         .then(res => {
//             debugger
//             return res.json()
//           })
//         .then(nightclubs => dispatch({type: 'ADD_NIGHTCLUBS', nightclubs: nightclubs.results}))    
//     }
// }