import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class NightClubCard extends Component {

    render(){
        return(
           <div key={this.props.nightclub.id}>
            <Link to={`/nightclubs/${this.props.nightclub.id}`}>{this.props.nightclub.name}</Link> 
           </div>
        )
    }
}

export default NightClubCard