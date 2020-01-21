import React, { Component } from 'react';
import { connect } from 'react-redux';
import NightClubCard from '../components/NightClubCard'
import {fetchNightClubs} from '../actions/NightClubs';
import {addUserLocation} from '../actions/User'

class NightClubs extends Component {

    renderNightClubs = () => {
        if(this.props.nightclubs){
        return this.props.nightclubs.map(n => {
            return <div><NightClubCard nightclub={n}/></div>
          })} else { return <div></div>}
      }
    
    componentDidMount(){
        this.props.fetchNightClubs()
    }

    // get location from browser
    getLocation = () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.getCoordinates);
        } else {
          alert("Geolocation is not supported by this browser.");
        }
      }

      getCoordinates = (position) => {
        console.log(position)
        this.props.addUserLocation(position)
      }

    render(){
        return(
        <div>
          <h2>NightClubs</h2>
            <div>{this.renderNightClubs()}</div>
            <div>{() => {this.getLocation()}}</div>
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