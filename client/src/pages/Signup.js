import React, { Component } from 'react';
// import {Container, Row, Col, Form, InputGroup, Button} from 'react-bootstrap'
import SignUpForm from '../components/SignupForm'
import '../App.css'
// import BackgroundImage from '../assets/background_signup'


export default class Signup extends Component {

    render(){
        return(
            <React.Fragment>
                <SignUpForm/>
            </React.Fragment>
        )
    }
}