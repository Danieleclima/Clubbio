import React from 'react';
import NavigationBar from '../components/Navbar'
import Footer from './Footer'
import '../App.css'
import '../NightClubPage.css'

const Layout = (props) => (
    <React.Fragment >
    <header>
    <NavigationBar />
    </header>
        {props.children}
    <Footer/>
    </React.Fragment>
)

export default Layout;