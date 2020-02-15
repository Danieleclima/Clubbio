import React, { Component } from 'react';


export default class User extends Component {

    render(){
        return(
            <React.Fragment>
                <h2>{this.props.user.username}</h2>
            </React.Fragment>
        )
    }
}
