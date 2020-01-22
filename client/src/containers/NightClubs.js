import React, { Component } from 'react';
import { connect } from 'react-redux';
import NightClubCard from '../components/NightClubCard'
import {fetchNightClubs} from '../actions/NightClubs';
import {addUserLocation} from '../actions/User'

class NightClubs extends Component {

  constructor(props) {
    super(props);
    this.getLocation()
    
    
  }

// render NightClubCard component
    renderNightClubs = () => {
        if(this.props.nightclubs){
        return this.props.nightclubs.map(n => {
            debugger
            return <div><NightClubCard nightclub={n}/></div>
          })} else { return <div></div>}
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
          <h2>NightClubs</h2>
            <div>{this.renderNightClubs()}</div>
            <div>{this.props.fetchNightClubs(this.props.user.coord)}</div>
          
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    debugger
    return {nightclubs: state.nightclubs.nightclubs,
            user: state.user}
  }


export default connect(mapStateToProps,{fetchNightClubs, addUserLocation})(NightClubs);