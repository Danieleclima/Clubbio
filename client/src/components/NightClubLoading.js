import React, { Component } from 'react';
import { Card, Spinner } from 'react-bootstrap';
import '../App.css';



class NightClubLoading extends Component {

    renderContent = () => { 
            return <Card className="nightclub-loading">
                <Card.Body className="d-flex justify-content-center align-items-center">
                <Spinner animation="border" />
                </Card.Body>
            </Card>
    }

    render() {
        return (
            <React.Fragment>
                {this.renderContent()}
            </React.Fragment>
        )
    }
}

export default NightClubLoading