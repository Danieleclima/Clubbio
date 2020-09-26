const options = (request, formData) => {
    return {
        method: request,
        headers: {
            'Content-Type': "application/json",
            Accept: "application/json"
        },
        credentials: 'include',
        body: JSON.stringify(formData)
    }
}

export function fetchNightClubs(venues) {
    debugger
    let results = []
    if (venues){
        debugger
        // dispatch ({type: 'START_ADDING_NIGHTCLUBS_REQUEST'});
        let nightclubs = venues[0].filter(function (nightclub){
            if (nightclub.hours){
                let sat_opening_time = 0
                let sat_closing_time = 0
            return nightclub.hours.forEach(element => {
                if (element.key === "sat_1_open") {
                    sat_opening_time = parseInt(element.value)
                } else if (element.key === "sat_1_close") {
                    sat_closing_time = parseInt(element.value)
                }
                if (sat_opening_time > 12 && sat_closing_time > 0 && sat_closing_time < 10){
                    // debugger
                    results.push(nightclub)
                    return true
                } else {
                    return false
                }
            })}
              
        })
        debugger
        fetch(`http://localhost:3001/nightclubs`, { 
        method: 'POST',
        headers: {
            'Content-Type': "application/json",
            Accept: "application/json"
          },
        body: JSON.stringify({venues:results})})
        .catch(error => {
            console.log(error)
        })
        
    }
    

    return (dispatch) => {


    //  let fb_nightclubs = () => window.FB.api(`/search?type=place&limit=150&center=${coords.latitude},${coords.longitude}&distance=2000&fields=name,hours,location,overall_star_rating,single_line_address,cover,description,engagement,phone,price_range,is_permanently_closed,restaurant_services&categories=["FOOD_BEVERAGE"]`, {  access_token : '1871254999757826|MUfFXQFVTJ3LROzREao-Z6ZZbHM'}, function(response) {
    //         console.log(response)
    //       })
    //       .then(nightclubs => dispatch({type: 'ADD_NIGHTCLUBS', nightclubs: nightclubs}))
    //       .catch(error => {
    //         debugger
    //         console.log(error)
    //     })    
    }
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
