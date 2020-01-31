import React, { Component } from 'react';
// import NightClubs from './containers/NightClubs'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Signup from './pages/Signup'
import NightClub from './components/NightClub';
import Layout from './components/Layout'

class App extends Component {

render(){
  return(
    <React.Fragment>
      <Layout>
  <Router>
    <Switch>
      <Route path="/" exact component={Homepage} />
      <Route path='/nightclubs/:id' exact component={NightClub} />
      <Route path="/signup" exact component={Signup} />
      {/* <NightClubs/> */}
    </Switch>
  </Router>
  </Layout>
  </React.Fragment>
  )
}
}
export default App;
