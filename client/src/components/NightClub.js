import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import logo from '../assets/Clubbio_logo_cropped.png'


export default class NightClub extends Component {

    constructor(props) {
        super(props);
        // this.routeParam = props.match.params
    }

    // renderNightClub = () => {
    //     debugger    
    // }

    render() {
        return (
            <React.Fragment>

                <div class="carousel slide carousel-fade nightclub-page-carousel" data-ride="carousel" id="carousel-1">
                    <div class="carousel-inner" role="listbox">
                        <div class="carousel-item active"><img class="img-fluid w-100 d-block" src="assets/img/Mayaclubbio.jpg" alt="Slide Image"/></div>
                            <div class="carousel-item"><img class="w-100 d-block" src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png" alt="Slide Image"/></div>
                                <div class="carousel-item"><img class="w-100 d-block" src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png" alt="Slide Image"/></div>
                                </div>
                                <div><a class="carousel-control-prev" href="#carousel-1" role="button" data-slide="prev"><span class="carousel-control-prev-icon"></span><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#carousel-1" role="button" data-slide="next"><span class="carousel-control-next-icon"></span><span class="sr-only">Next</span></a></div>
                                <ol
                                    class="carousel-indicators">
                                    <li data-target="#carousel-1" data-slide-to="0" class="active"></li>
                                    <li data-target="#carousel-1" data-slide-to="1"></li>
                                    <li data-target="#carousel-1" data-slide-to="2"></li>
                                </ol>
                            </div>
                            <div class="container nighclub-page-background-color container-fluid">
                                <div class="row nightclub-page-section">
                                    <div class="col-sm-12 col-lg-8 col-xl-8 d-flex justify-content-center align-content-center justify-content-md-center justify-content-lg-end justify-content-xl-end ratings-and-reviews">
                                        <aside class="border rounded shadow-sm ratings-and-reviews-component" data-bs-hover-animate="pulse"></aside>
                                    </div>
                                    <div class="col-12 col-sm-12 col-lg-4 col-xl-4 d-flex justify-content-center justify-content-lg-start justify-content-xl-start location-section">
                                        <aside class="border rounded shadow-sm location-component" data-bs-hover-animate="pulse"></aside>
                                    </div>
                                    <div class="col-sm-12 col-lg-8 col-xl-8 d-flex flex-column justify-content-center align-items-center align-items-sm-center justify-content-md-center justify-content-lg-end align-items-lg-end justify-content-xl-end align-items-xl-end details-and-amenities-section">
                                        <aside class="border rounded shadow-sm mb-auto details-component" data-bs-hover-animate="pulse"></aside>
                                        <aside class="border rounded shadow-sm d-flex reviews-component" data-bs-hover-animate="pulse"></aside>
                                    </div>
                                    <div class="col-sm-12 col-lg-4 col-xl-4 d-flex justify-content-center order-sm-1 justify-content-lg-start ml-lg-auto justify-content-xl-start ml-xl-auto nearby-section">
                                        <aside class="border rounded shadow-sm map-component" data-bs-hover-animate="pulse"></aside>
                                    </div>
                                </div>
                            </div>
                            <div class="footer-dark">
                                <footer>
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-sm-6 col-md-3 item">
                                                <h3>Services</h3>
                                                <ul>
                                                    <li><a href="#">Web design</a></li>
                                                    <li><a href="#">Development</a></li>
                                                    <li><a href="#">Hosting</a></li>
                                                </ul>
                                            </div>
                                            <div class="col-sm-6 col-md-3 item">
                                                <h3>About</h3>
                                                <ul>
                                                    <li><a href="#">Company</a></li>
                                                    <li><a href="#">Team</a></li>
                                                    <li><a href="#">Careers</a></li>
                                                </ul>
                                            </div>
                                            <div class="col-md-6 item text">
                                                <h3>Company Name</h3>
                                                <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
                                            </div>
                                            <div class="col item social"><a href="#"><i class="icon ion-social-facebook"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-instagram"></i></a></div>
                                        </div>
                                        <p class="copyright">Company Name © 2017</p>
                                    </div>
                                </footer>
                            </div>
                            <script src="assets/js/jquery.min.js"></script>
                            <script src="assets/bootstrap/js/bootstrap.min.js"></script>
                            <script src="assets/js/bs-init.js"></script>
                
            </React.Fragment>
        )
    }
}

