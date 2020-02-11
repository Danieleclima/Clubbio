import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/Clubbio_logo_reduced.png'
import { checkLoginStatus } from '../actions/User';
import { connect } from 'react-redux';

class NavigationBar extends Component {

    componentDidMount(){
        this.props.checkLoginStatus()
    }

    renderNavLinks = () => {
        if (this.props.user.logged_in){
            return <Nav>
            <Nav.Link href="/">Home</Nav.Link> 
            <Nav.Link href="/Blog">Blog</Nav.Link> 
            <Nav.Link href={`/users/${this.props.user.current_user.id}`}> Logged in as: {this.props.user.current_user.user.username} </Nav.Link>
            </Nav>
        } else {
            return <Nav>
            <Nav.Link href="/">Home</Nav.Link> 
            <Nav.Link href="/Blog">Blog</Nav.Link> 
            <Nav.Link href={`/signup`}> Log in</Nav.Link>
            <Nav.Link href="/signup">Sign up</Nav.Link>
            </Nav>
        }
    }

    render(){
        return (
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
            {this.renderNavLinks()}
        </Navbar.Collapse>
    </Navbar>
    )
    }
}

const mapStateToProps = (state) => {
    debugger
    return {user: state.user}
}

export default connect(mapStateToProps, { checkLoginStatus })(NavigationBar);