import React, { Component } from 'react';
import Maya from '../assets/Mayaclubbio.jpg'
import bsinit from '../scripts/bs-init'
import jquery from '../scripts/jquery.min.js'
import '../NightClubPage.css'

export default class NightClub extends Component {

    constructor(props) {
        super(props);
        debugger
        this.id = props.match.params.id
    }

    render() {
        return (
            <React.Fragment>
                <div class="carousel slide carousel-fade nightclub-page-carousel" data-ride="carousel" id="carousel-1">
                    <div class="carousel-inner" role="listbox">
                        <div class="carousel-item active"><img class="img-fluid w-100 d-block" src={Maya} alt="Slide Image"/></div>
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
                            <script src={jquery}></script>
                            {/* <script src="assets/bootstrap/js/bootstrap.min.js"></script> */}
                            <script src={bsinit}></script>
                
            </React.Fragment>
        )
    }
}

