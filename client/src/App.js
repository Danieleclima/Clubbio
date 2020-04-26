import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Signup from './pages/Signup'
import NightClub from './components/NightClub';
import Layout from './components/Layout';
import Users from './containers/Users';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faGoogle, faTwitter} from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import './App.css';


class App extends Component {

render(){

  library.add(fab, faCheckSquare, faStar, faStarHalf, faFacebookSquare, faGoogle, faTwitter)

  return(
    <React.Fragment>
      <Layout>
  <Router>
    <Switch>
      <Route path="/" exact component={Homepage} />
      <Route path='/nightclubs/:id' exact component={NightClub} />
      <Route path='/users/:id' exact component={Users} />
      {/* <Route path="/signup" exact component={Signup} /> */}
    </Switch>
  </Router>
  </Layout>
  </React.Fragment>
  )
}
}
export default App;
