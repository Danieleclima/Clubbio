import React from 'react';
import NavigationBar from '../components/Navbar'
import '../App.css'

const Layout = (props) => (
    <React.Fragment >
    <header>
    <NavigationBar />
    </header>
        {props.children}
    </React.Fragment>
)

export default Layout;