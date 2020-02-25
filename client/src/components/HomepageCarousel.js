import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import Homepagebanner from '../assets/Homepage_banner.jpg'
import '../App.css'

const homepageCarousel = (props) => (
  <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={Homepagebanner}
        alt="First slide"
        width="1920"
        height="733"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://images.pexels.com/photos/2728557/pexels-photo-2728557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt="Third slide"
        width="1920"
        height="733"
      />

      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
)

export default homepageCarousel