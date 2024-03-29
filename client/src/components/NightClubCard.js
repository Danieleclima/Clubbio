import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import '../App.css';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Spinner } from 'react-bootstrap';


class NightClubCard extends Component {

    roundRating = (value, step) => {
        step || (step = 0.5);
        var inv = 1.0 / step;
        return Math.round(value * inv) / inv;
    }

    renderImage = () => {
        debugger
        if (this.props.nightclub.cover.source) {
            return <Card.Img className="img-fluid" variant="top" src={decodeURIComponent(this.props.nightclub.cover.source)} />
        } else { return <Card.Img className="img-fluid" variant="top" /> }
    }

    renderContent = () => {
        if (this.props.nightclub) {
            return <Card>
                {this.renderImage()}
                <Card.Body>
                    <Card.Title ><Link to={`/nightclubs/${this.props.nightclub.id}`}>{this.props.nightclub.name} </Link> </Card.Title>
                    <Card.Text>
                    {this.props.nightclub.description}
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
            </Card.Text>
                    <Rating
                        emptySymbol={<span className="fa fa-star-o fa-2x empty-star" />}
                        fullSymbol={<FontAwesomeIcon icon="star" size="2x" className="full-star" />}
                        initialRating={this.roundRating(this.props.nightclub.overall_star_rating, 0.5)}
                    />
                </Card.Body>
                <Card.Footer>
                    <Button className="Clubbio-color" variant="primary">Go somewhere</Button>
                </Card.Footer>
            </Card>
        }
    }

    render() {
        // console.log(this.props.nightclub)
        return (
            <React.Fragment>
                {this.renderContent()}
            </React.Fragment>
        )
    }
}

export default NightClubCard