
export function fetchNightClubs(coords) {
    debugger
    return (dispatch) => {
        if (coords){
        dispatch ({type: 'START_ADDING_NIGHTCLUBS_REQUEST'});
       let nightclubs = () => window.FB.api('/search?type=place&limit=150&center=51.510067,-0.133869&fields=name,hours,location,overall_star_rating,single_line_address,cover,description,engagement,phone,price_range,is_permanently_closed,restaurant_services&categories=["FOOD_BEVERAGE"]', {  access_token : '1871254999757826|MUfFXQFVTJ3LROzREao-Z6ZZbHM'}, function(response) {
            debugger
            dispatch({type: 'ADD_NIGHTCLUBS', nightclubs: response})
            return response
          })
          debugger
    }}
}


export const fetchClub = id => {
    debugger
    return (dispatch) => {
        if (id){
        dispatch ({type: 'START_PULLING_NIGHTCLUB'});
        let targetUrl = `http://localhost:3001/nightclub`
        fetch(targetUrl)
        .then(res => {
            debugger
            return res.json()
          })
        .then(nightclub => dispatch({type: 'CURRENT_NIGHTCLUB', nightclubs: nightclub.result}))
        .catch(error => {
            console.log(error)
        })  
}}}
