import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import NightClubs from '../containers/NightClubs'
import HomepageCarousel from '../components/HomepageCarousel'

// import CheckBox from '../components/Checkbox'
// import NavigationBar from '../components/Navbar'


export default class Homepage extends Component {

    componentDidMount(){
        this.init()
    }

    init = () => window.FB.api('/search?limit=500?type=place&center=51.510067,-0.133869&categories=["FOOD_BEVERAGE"]', {fields: 'name,checkins,website'}, {  access_token : '1871254999757826|MUfFXQFVTJ3LROzREao-Z6ZZbHM' }, function(response) {
        console.log(response);
      })

    render(){
        return(
            <React.Fragment>
                <HomepageCarousel/>
                <main>
                
                <NightClubs/>
                </main>
                {/* <footer></footer> */}
            </React.Fragment>
        )
    }
}