import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Container, Row, Modal } from 'react-bootstrap'
import { createUser } from '../actions/User';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Nav } from 'react-bootstrap'



class SignUpForm extends Component {

    componentDidMount() {
        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const container = document.getElementById('container-sign');

        signUpButton.addEventListener('click', () => {
            container.classList.add("right-panel-active");
        });

        signInButton.addEventListener('click', () => {
            container.classList.remove("right-panel-active");
        });
    }

    state = {
        // first_name: '',
        // last_name: '',
        username: '',
        // city: '',
        // country: '',
        // postcode: '',
        email: '',
        password: '',
        password_confirmation: '',
        show_modal: false
    }

    showAndHide = () => {
        this.setState({
            show_modal: !this.state.show_modal
        })
    }

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = event => {
        console.log('a')
        event.preventDefault();
        this.props.createUser(this.state)
        this.setState({
            first_name: '',
            last_name: '',
            username: '',
            city: '',
            country: '',
            postcode: '',
            email: '',
            password: '',
            password_confirmation: ''
        })
        console.log('e')
    }

    render() {
        return (
            <React.Fragment>
                        <div class="container" id="container-sign">
                            <div class="form-container sign-up-container">
                                <form action="#" onSubmit={this.handleOnSubmit}>
                                    <h1>Create Account</h1>
                                    <div class="social-container">
                                        {/* <a href="#" class="social"><FontAwesomeIcon icon={faCoffee} /></a> */}
                                        <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                                        <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                                    </div>
                                    <span>or use your email for registration</span>
                                    <input type="text" placeholder="Name" name="username" value={this.state.username} onChange={this.handleOnChange} />
                                    <input type="email" placeholder="Email" name="email" value={this.state.email} onChange={this.handleOnChange} />
                                    <input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleOnChange} />
                                    <input type="password" placeholder="Confirm Password" name="password_confirmation" value={this.state.password_confirmation} onChange={this.handleOnChange} />
                                    <button>Sign Up</button>
                                </form>
                            </div>
                            <div class="form-container sign-in-container">
                                <form action="#">
                                    <h1>Sign in</h1>
                                    <span>or use your account</span>
                                    {/* <div class="social-container"> */}
                                    <span className="social">
                                        <a href="http://localhost:3001/users/auth/facebook" className="social" id="facebook"><i class="fab fa-facebook-f" id="facebook"></i></a>
                                        <a href="http://localhost:3001/users/auth/google_oauth2" class="social"><i class="fab fa-google" id="google"></i></a>
                                        <a href="#" class="social"><i class="fab fa-instagram" id="instagram"></i></a>
                                        <a href="#" class="social"><i class="fab fa-snapchat" id="snapchat"></i></a>
                                    </span>
                                    {/* </div> */}
                                    <input type="email" placeholder="Email" name="email" value={this.state.email} onChange={this.handleOnChange} />
                                    <input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleOnChange} />
                                    <a href="#">Forgot your password?</a>
                                    <button>Sign In</button>
                                </form>
                            </div>
                            <div class="overlay-container">
                                <div class="overlay">
                                    <div class="overlay-panel overlay-left">
                                        <h1>Welcome Back!</h1>
                                        <p>To keep connected with us please login with your personal info</p>
                                        <button class="ghost" id="signIn">Sign In</button>
                                    </div>
                                    <div class="overlay-panel overlay-right">
                                        <h1>Hello, Friend!</h1>
                                        <p>Enter your personal details and start journey with us</p>
                                        <button class="ghost" id="signUp">Sign Up</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <footer>
                            <p>
                                Created with <i class="fa fa-heart"></i> by
		<a target="_blank" href="https://florin-pop.com">Florin Pop</a>
		- Read how I created this and how you can join the challenge
		<a target="_blank" href="https://www.florin-pop.com/blog/2019/03/double-slider-sign-in-up-form/">here</a>.
	</p>
                        </footer> */}
            </React.Fragment>

        )
    }
}



export default connect(null, { createUser })(SignUpForm);