import React, { Component } from 'react';
import NightClubs from '../containers/NightClubs'

export default class Homepage extends Component {

    render(){
        return(
            <React.Fragment>
                <header></header>
                <main>
                <NightClubs/>
                </main>
                <footer></footer>
            </React.Fragment>
        )
    }
}