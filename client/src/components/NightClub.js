import React, { Component } from 'react';
import HomepageCarousel from '../components/HomepageCarousel'
// import NightClubs from '../containers/NightClubs'

export default class NightClub extends Component {

    render(){
        return(
            <React.Fragment>
                {console.log(this.props.match.params)}
            < HomepageCarousel />
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {nightclubs: state.nighclubs}
}