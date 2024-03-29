import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Form, InputGroup, Button, Modal } from 'react-bootstrap'
import { createUser } from '../actions/User';
import '../App.css'


class SignUpForm extends Component {

    state = {
        first_name: '',
        last_name: '',
        username: '',
        city: '',
        country: '',
        postcode: '',
        email: '',
        password: '',
        password_confirmation: '',
        show_modal: false
    }

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = event => {
        // console.log(this.state)
        console.log('a')
        event.preventDefault();
        //debugger
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
            <Form noValidate validated="" onSubmit={this.handleOnSubmit}>
                <Form.Row>
                    <Form.Group as={Col} md="12" controlId="validationCustom01" className="align-self-start">
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                            onChange={this.handleOnChange}
                            required
                            type="text"
                            name="first_name"
                            placeholder="First name"
                            value={this.state.first_name}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="12" controlId="validationCustom02">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                            onChange={this.handleOnChange}
                            required
                            type="text"
                            name="last_name"
                            placeholder="Last name"
                            value={this.state.last_name}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>

                    {/* <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                        <Form.Label>Username</Form.Label>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                                onChange={this.handleOnChange}
                                type="text"
                                placeholder="Username"
                                name="username"
                                value={this.state.username}
                                aria-describedby="inputGroupPrepend"
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please choose a username.
                </Form.Control.Feedback>
                        </InputGroup>

                    </Form.Group> */}

                    <Form.Group as={Col} md="12" controlId="validationCustom03">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            onChange={this.handleOnChange}
                            required
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={this.state.password}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>


                    <Form.Group as={Col} md="12" controlId="validationCustom03">
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control
                            onChange={this.handleOnChange}
                            required
                            type="password"
                            name="password_confirmation"
                            placeholder="Confirm password"
                            value={this.state.password_confirmation}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>

                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} md="12" controlId="validationCustom04">
                        <Form.Label>Email</Form.Label>
                        <Form.Control onChange={this.handleOnChange} name="email" type="email" placeholder="email" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid email address.
              </Form.Control.Feedback>
                    </Form.Group>
{/* 
                    <Form.Group as={Col} md="2" controlId="validationCustom05">
                        <Form.Label>City</Form.Label>
                        <Form.Control onChange={this.handleOnChange} name="city" type="text" placeholder="City" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid city.
              </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom06">
                        <Form.Label>Country</Form.Label>
                        <Form.Control onChange={this.handleOnChange} name="country" type="text" placeholder="State" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid country.
              </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom07">
                        <Form.Label>Postcode</Form.Label>
                        <Form.Control onChange={this.handleOnChange} name="postcode" type="text" placeholder="Zip" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid Postcode.
              </Form.Control.Feedback>
                    </Form.Group> */}
                </Form.Row>
                <Form.Group>
                    <Form.Check
                        required
                        label="Agree to terms and conditions"
                        feedback="You must agree before submitting."
                    />
                </Form.Group>
                <Button as={Col} md="9" type="submit">Submit form</Button>
            </Form>

        )
    }
}

export default connect(null, { createUser })(SignUpForm);

