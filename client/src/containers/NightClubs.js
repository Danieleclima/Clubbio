import React, { Component } from 'react';
import { connect } from 'react-redux';
import NightClubCard from '../components/NightClubCard'
import { fetchNightClubs } from '../actions/NightClubs';
import { addUserLocation } from '../actions/User'
import { Container, Row, Col, CardDeck } from 'react-bootstrap';
import '../App.css';
import CheckBox from '../components/Checkbox'

class NightClubs extends Component {

  constructor(props) {
    super(props);
    this.getLocation()
    this.sortingNightClubs = this.sortingNightClubs.bind(this);

  }

  state = {
    sortedByRating: false
  }

  // render NightClubCard component
  renderNightClubs = () => {
    if (this.props.nightclubs && this.props.nightclubs !== []) {
      debugger
      return <Container className="fullview_component" fluid={true}> <Row><CardDeck>{this.props.nightclubs.slice(0, 6).map(n => {
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

  sortingNightClubs = () => {
    debugger
    let compare = function(a, b){

      const firstNightClub = a.rating
      const secondNightClub = b.rating
  
      let comparison = 0;
  
      if (firstNightClub > secondNightClub) {
        comparison = 1;
      } else if (secondNightClub < firstNightClub) {
        comparison = -1;
      }
      return comparison
    }
    if (this.state.sortedByRating) {
      this.setState({
        sortedByRating: true
      })
      this.props.nightclubs.sort(compare)
    } else {
      this.setState({
        sortedByRating: false
      })
      }
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
        <CheckBox sortByRating={this.sortingNightClubs} />
        {this.renderNightClubs()}
        {this.props.fetchNightClubs(this.props.user.coords)}
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