import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import NightClubs from '../containers/NightClubs'
import HomepageCarousel from '../components/HomepageCarousel'

// import CheckBox from '../components/Checkbox'
// import NavigationBar from '../components/Navbar'


export default class Homepage extends Component {

    componentDidMount(){
    }


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