import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import NightClubs from '../containers/NightClubs'
import Navbar from '../components/Navbar'

export default class Homepage extends Component {

    render(){
        return(
            <React.Fragment>
                <header>
                    <Navbar/>
                </header>
                <main>
                <NightClubs/>
                </main>
                <footer></footer>
            </React.Fragment>
        )
    }
}