import React, { Component } from 'react';
import { connect } from 'react-redux';
import User from '../components/User'
// import { Container, Row, Col, CardDeck } from 'react-bootstrap';
import '../App.css'

class Users extends Component {

  constructor(props) {
    super(props);
  }

  renderUser = () => {
    if (this.props.user.logged_in) {

      return <User user={this.props.user.current_user} />
    } else { return <React.Fragment> <h2>You are not logged in</h2></React.Fragment> }
  }

  render() {
    return (
      <React.Fragment>
          {this.renderUser()}
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    nightclubs: state.nightclubs.nightclubs,
    user: state.user
  }
}


export default connect(mapStateToProps, { })(Users);