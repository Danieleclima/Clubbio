import React, { Component } from 'react';
import { connect } from 'react-redux';

class NightClubs extends Component {
    
    render(){
        return(
        <div>
          <h2>NightClubs</h2>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    // debugger
    return {nightclubs: state.nightclubs}
  }

export default connect(mapStateToProps)(NightClubs);