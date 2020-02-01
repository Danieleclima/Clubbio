import React, { Component } from 'react';
import { connect } from 'react-redux';
import NightClubCard from '../components/NightClubCard'
import { fetchNightClubs } from '../actions/NightClubs';
import { addUserLocation } from '../actions/User'
import { Container, Row, Col, CardDeck } from 'react-bootstrap';
import '../App.css'

class NightClubs extends Component {

  constructor(props) {
    super(props);
    this.getLocation()


  }

  // render NightClubCard component
  renderNightClubs = () => {
    if (this.props.nightclubs) {
      return <Container fluid={true}> <Row className="fullview_component"><CardDeck>{this.props.nightclubs.slice(0, 6).map(n => {
        return <Col className="col-md-4 col-sm-6 my-3"> <NightClubCard nightclub={n} /> </Col>
      })}  </CardDeck> </Row> </Container>
    } else { return <React.Fragment></React.Fragment> }
  }

  componentDidMount() {
  }

  // get location from browser
  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getCoordinates, null, { enableHighAccuracy: true });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  // pass coordinates to action
  getCoordinates = (position) => {
    console.log(position)
    // debugger
    this.props.addUserLocation(position)
  }

  render() {
    return (
      <React.Fragment>
        <Container className="Homepage-title">
          <Row>
            <Col className="d-flex justify-content-center">
              <h2>NightClubs near you</h2>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center">
              <h5>Discover the hottest clubs around you</h5>
            </Col>
          </Row>
        </Container>
        {this.renderNightClubs()}
        {this.props.fetchNightClubs(this.props.user.coord)}
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  debugger
  return {
    nightclubs: state.nightclubs.nightclubs,
    user: state.user
  }
}


export default connect(mapStateToProps, { fetchNightClubs, addUserLocation })(NightClubs);