
export function fetchNightClubs() {
    return (dispatch) => {
        dispatch ({type: 'START_ADDING_NIGHTCLUBS_REQUEST'});
        let proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        let targetUrl = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=51.528308,-0.3817765&radius=3000&type=night_club&key=AIzaSyDXutd941FQhPL2Nh8upxQZo8rhEAs0Moo';
        fetch(proxyUrl + targetUrl)
        .then(res => {
            // debugger
            return res.json()
          })
        .then(nightclubs => dispatch({type: 'ADD_NIGHTCLUBS', nightclubs: nightclubs.results}))    
    } 
}