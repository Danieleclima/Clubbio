import React, { Component } from 'react';

class NightClubCard extends Component {

    render(){
        return (
           <div>
        <h3>{this.props.nightclub.name}</h3>
           </div> 
        )
    }

}

export default NightClubCard