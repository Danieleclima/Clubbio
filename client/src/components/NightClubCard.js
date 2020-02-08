import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import ReactStars from 'react-rating-stars-component'
import '../App.css'


class NightClubCard extends Component {

    roundRating = (value, step) => {
        step || (step = 0.5);
        var inv = 1.0 / step;
        return Math.round(value * inv) / inv;
    }

    render() {
        let image =  <Card.Img className="img-fluid" variant="top" src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=700&photoreference=${this.props.nightclub.photos[0].photo_reference}&key=AIzaSyDXutd941FQhPL2Nh8upxQZo8rhEAs0Moo`} />
        return (
            <Card>
                {image}
                <Card.Body>
                <Card.Title ><Link to={`/nightclubs/${this.props.nightclub.id}`}>{this.props.nightclub.name} </Link> </Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                </Card.Text>
                    <ReactStars count={5} size={40}
                        value={this.roundRating(this.props.nightclub.rating, 0.5)} />
                </Card.Body>
                <Card.Footer>
                    <Button className="Clubbio-color" variant="primary">Go somewhere</Button>
                </Card.Footer>
            </Card>

        )
    }
}

export default NightClubCard