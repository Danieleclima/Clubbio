import React, { Component } from 'react';
// import NightClubs from './containers/NightClubs'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
import NightClub from './components/NightClub';

class App extends Component {

render(){
  return(
    <div>
  <Router>
    <Switch>
      <Route path="/" exact component={Homepage} />
      <Route path='/nightclubs/:id' component={NightClub} />
      {/* <NightClubs/> */}
    </Switch>
  </Router>
  </div>
  )
}
}
export default App;
