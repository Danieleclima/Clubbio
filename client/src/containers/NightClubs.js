import React, { Component } from 'react';
import { connect } from 'react-redux';
import NightClubCard from '../components/NightClubCard'
import {fetchNightClubs} from '../actions/NightClubs';
import {addUserLocation} from '../actions/User'
import {Container, Row, Col} from 'react-bootstrap';

class NightClubs extends Component {

  constructor(props) {
    super(props);
    this.getLocation()
    
    
  }

// render NightClubCard component
    renderNightClubs = () => {
        if(this.props.nightclubs){
        return <Container> <Row className="justify-content-between"> {this.props.nightclubs.slice(0,6).map(n => {
            return <Col className="col-md-4 col-sm-6 my-3"> <NightClubCard nightclub={n}/> </Col>
          })}  </Row> </Container>} else { return <div></div>} 
      }
    
    componentDidMount(){
    }

    // get location from browser
    getLocation = () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.getCoordinates, null, {enableHighAccuracy: true});
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

    render(){
        return(
          <div>
          <Container>
            <Row height="733" className="justify-content-center">
              <Col>
              <h2>NightClubs near you</h2>
              </Col>
            </Row>
          </Container>
            {this.renderNightClubs()}
            <div>{this.props.fetchNightClubs(this.props.user.coord)}</div>
            </div>
        )}
}

const mapStateToProps = (state) => {
    debugger
    return {nightclubs: state.nightclubs.nightclubs,
            user: state.user}
  }


export default connect(mapStateToProps,{fetchNightClubs, addUserLocation})(NightClubs);