import React from 'react';
import {Navbar as Nav} from 'react-bootstrap';
import '../App.css'

const Navbar = (props) => (
    <Nav bg="Clubbio-color">
        <Nav.Brand href="/">
            <img 
            src="./assets/Clubbio_logo"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Clubbio logo"/>
        </Nav.Brand>
    </Nav>
)

export default Navbar;