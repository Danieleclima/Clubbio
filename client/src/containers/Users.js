import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, CardDeck } from 'react-bootstrap';
import '../App.css'

class Users extends Component {

  constructor(props) {
    super(props);
  }

  renderNightClubs = () => {
    if (this.props.nightclubs && this.props.nightclubs !== []) {
      debugger
      return <Container fluid={true}> <Row className="fullview_component"><CardDeck>{this.props.nightclubs.slice(0, 6).map(n => {
        return <Col className="col-md-4 col-sm-6 my-3"> <NightClubCard nightclub={n} /> </Col>
      })}  </CardDeck> </Row> </Container>
    } else { return <React.Fragment></React.Fragment> }
  }

  render() {
    return (
      <React.Fragment>
        <Container className="Homepage-title">
          <Row>
            <Col className="d-flex justify-content-center">
              <h2>Users near you</h2>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center">
              <h5>Discover the hottest clubs around you</h5>
            </Col>
          </Row>
        </Container>
        {this.renderNightClubs()}
        {this.props.fetchNightClubs(this.props.user.coords)}
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  debugger
  return {
    nightclubs: state.nightclubs.nightclubs,
    user: state.user
  }
}


export default connect(mapStateToProps, { })(Users);