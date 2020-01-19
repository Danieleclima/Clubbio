import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

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
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {apicall()}
    </div>
  );
}

export default App;
