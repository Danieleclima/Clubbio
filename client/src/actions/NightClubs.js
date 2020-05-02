
export function fetchNightClubs(coords) {
    debugger
    return (dispatch) => {
        if (coords){
        dispatch ({type: 'START_ADDING_NIGHTCLUBS_REQUEST'});
        let proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        let targetUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${coords.latitude},${coords.longitude}&radius=20000&type=night_club&key=AIzaSyDXutd941FQhPL2Nh8upxQZo8rhEAs0Moo`
        fetch(proxyUrl + targetUrl)
        .then(res => {
            return res.json()
          })
        .then(nightclubs => dispatch({type: 'ADD_NIGHTCLUBS', nightclubs: nightclubs.results})) 
        // .catch(error => {
        // 
        //     console.log(error)
        // })  
    }}
}


export function fetchNightClub(id) {
    debugger
    // return (dispatch) => {
    //     debugger
        // dispatch ({type: 'START_PULLING_NIGHTCLUB'});
        let proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        let targetUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${id}&fields=name,rating,formatted_phone_number,photo,adr_address&key=AIzaSyDXutd941FQhPL2Nh8upxQZo8rhEAs0Moo`
        fetch(proxyUrl + targetUrl)
        .then(res => {
            debugger
            return res.json()
          })
        .then(nightclub => {
            debugger
            return nightclub.result
            })
        .catch(error => {
        
            console.log(error)
        })  
    }
