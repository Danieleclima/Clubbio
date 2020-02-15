import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import logo from '../assets/Clubbio_logo_cropped.png'


export default class NightClub extends Component {

    render() {
        return (
            <React.Fragment>
                {console.log(this.props.match.params)}
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={logo}
                            alt="First slide"
                            width="1920"
                            height="733"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </React.Fragment>
        )
    }
}

