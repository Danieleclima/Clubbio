import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/Clubbio_logo_reduced.png'

const NavigationBar = (props) => (
    <Navbar className="Clubbio-color" expand="lg">
        <Navbar.Brand href="/">
            <img
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="Clubbio logo" />
        </ Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="navbarNav">
            <div className="mr-auto"></div>
            <Nav >
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/signup">Sign up</Nav.Link>
                <Nav.Link href="/signup">Blog</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)


export default NavigationBar;