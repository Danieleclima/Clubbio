import React, { Component } from 'react';
import { connect } from 'react-redux';
import NightClubCard from '../components/NightClubCard'
import NightClubLoading from '../components/NightClubLoading'
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
    this.init = this.init.bind(this)
  }

  state = {
    sortedByRating: false,
    sortedArray: false
  }

  // render NightClubCard component
  renderNightClubs = (nightclubs = this.props.nightclubs) => {
    if (this.state.sortedArray) {
      nightclubs = this.state.sortedArray
    }
    if (nightclubs) {
      return <Container className="fullview_component" fluid={true}> <Row><CardDeck>{nightclubs.slice(0, 6).map(n => {
        return <Col className="col-md-4 col-sm-6 my-3"> <NightClubCard nightclub={n} /> </Col>
      })}  </CardDeck> </Row> </Container>
    } else {
      return <Container className="fullview_component" fluid={true}> <Row><CardDeck className="container-fluid">
        <Col className="col-md-4 col-sm-6 my-3"> <NightClubLoading /> </Col>
        <Col className="col-md-4 col-sm-6 my-3"> <NightClubLoading /> </Col>
        <Col className="col-md-4 col-sm-6 my-3"> <NightClubLoading /> </Col>
        <Col className="col-md-4 col-sm-6 my-3"> <NightClubLoading /> </Col>
        <Col className="col-md-4 col-sm-6 my-3"> <NightClubLoading /> </Col>
        <Col className="col-md-4 col-sm-6 my-3"> <NightClubLoading /> </Col>
    } </CardDeck> </Row> </Container>
    }
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

    this.props.addUserLocation(position)
  }

  sortingNightClubs = () => {
    // compare function that will get passed to the sort method
    let compare = function (a, b) {
      return b.rating - a.rating
    }

    if (!this.state.sortedByRating) {

      let sortedArray = [...this.props.nightclubs]
      sortedArray.sort(compare)

      this.setState({
        sortedByRating: true,
        sortedArray: [...sortedArray]
      })

      this.renderNightClubs(sortedArray)
    } else {
      this.setState({
        sortedByRating: false,
        sortedArray: false
      })
      this.renderNightClubs()
    }
  }
  // fetch nightclubs from the FB API
  init = (location) => {
    let venues = []
    if (location) {
      window.FB.api(`/search?type=place&limit=150&center=${location.latitude},${location.longitude}&fields=name,hours,location,overall_star_rating,single_line_address,cover,description,engagement,phone,price_range,is_permanently_closed,restaurant_services&categories=["FOOD_BEVERAGE"]`, { fields: 'name,hours,location,overall_star_rating,single_line_address,cover,description,engagement,phone,price_range,is_permanently_closed,restaurant_services' }, { access_token: '1871254999757826|MUfFXQFVTJ3LROzREao-Z6ZZbHM' }, function (response) {
        venues.push(response.data)
        debugger
        if (response.paging.next) {
          let url = response.paging.next
            let fetchData = function(){ fetch(url)
              .then(res => {
                debugger
                return res.json()
              })
              .then(received_venues => {
                debugger
                received_venues.data.forEach(nightclub => 
                  venues[0].push(nightclub))
                  if(received_venues.paging.next){
                   url = received_venues.paging.next
                   fetchData()
                  } else {
                  fetchNightClubs(venues)
                  }
              })}
          
        }
      })
    }
  }
  // 

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
        {this.init(this.props.user.coords)}
        {this.renderNightClubs()}
        {/* {this.props.fetchNightClubs(this.props.user.coords)} */}
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    nightclubs: state.nightclubs.nightclubs,
    user: state.user
  }
}


export default connect(mapStateToProps, { fetchNightClubs, addUserLocation })(NightClubs);