import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Card, Button, CardDeck } from 'react-bootstrap'
import '../App.css'

class NightClubCard extends Component {

    render() {
        return (
            //    <div key={this.props.nightclub.id}>
            //     <Link to={`/nightclubs/${this.props.nightclub.id}`}>{this.props.nightclub.name}</Link> 
            //    </div>

            <Card>
                <Card.Img className="img-fluid" variant="top" src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=700&photoreference=${this.props.nightclub.photos[0].photo_reference}&key=AIzaSyDXutd941FQhPL2Nh8upxQZo8rhEAs0Moo`} />
                <Card.Body>
                    <Card.Title><Link to={`/nightclubs/${this.props.nightclub.id}`}>{this.props.nightclub.name}</Link> </Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button className="Clubbio-color" variant="primary">Go somewhere</Button>
                </Card.Footer>
            </Card>

        )
    }
}

export default NightClubCard