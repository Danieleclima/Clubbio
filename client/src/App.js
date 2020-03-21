import React, { Component } from 'react';
// import NightClubs from './containers/NightClubs'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Signup from './pages/Signup'
import NightClub from './components/NightClub';
import Layout from './components/Layout'
import Users from './containers/Users'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';


class App extends Component {

render(){

  library.add(fab, faCheckSquare, faCoffee)

  return(
    <React.Fragment>
      <Layout>
  <Router>
    <Switch>
      <Route path="/" exact component={Homepage} />
      <Route path='/nightclubs/:id' exact component={NightClub} />
      <Route path='/users/:id' exact component={Users} />
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
