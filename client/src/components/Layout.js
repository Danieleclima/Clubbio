import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import NavigationBar from '../components/Navbar'
import '../App.css'

const Layout = (props) => (
    <React.Fragment >
    <header>
    <NavigationBar />
    </header>
    <Container fluid={true} className="Layout">
    <Row>
    <Col className="col-xs-12">
        {props.children}
    </Col>
    </Row>
    </Container>
    </React.Fragment>
)

export default Layout;