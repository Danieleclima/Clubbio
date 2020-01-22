import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class NightClubCard extends Component {

    render(){
        return(
           <div>
            <Link to={`/nightclubs/${this.props.nightclub.name}`}>{this.props.nightclub.name}</Link> 
           </div>
        )
    }
}

export default NightClubCard