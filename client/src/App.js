import React, { Component } from 'react';
import NightClubs from './containers/NightClubs'

class App extends Component {

// const apicall = () => {
//   let proxyUrl = 'https://cors-anywhere.herokuapp.com/'
//   let targetUrl = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=51.528308,-0.3817765&radius=3000&type=night_club&key=AIzaSyDXutd941FQhPL2Nh8upxQZo8rhEAs0Moo'
// fetch(proxyUrl + targetUrl)
// .then(res => {
//   return res.json()
// })
// .then(res => {
//   // debugger
//   console.log(res)
// })
// }

render(){
  return(
    <div>
      <NightClubs/>
    </div>
  )
}
}
export default App;
