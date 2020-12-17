import React, {useState} from 'react';
import {Image, Button, ButtonToolbar} from 'react-bootstrap';
import { Container, Row, Col, CardGroup, Card, Fade, Nav} from 'react-bootstrap';
import {Jumbotron, Form, Table} from 'react-bootstrap';
import { withRouter } from 'react-router';
import {SignInNav} from './SignInNav.js';
import '.././App.css';
import '.././css/signin.css';
import { Redirect } from 'react-router-dom';

function SignIn() {
    function onSignIn(googleUser) {
        var profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    }

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        }
        setValidated(true);
    };

    const redirectLogin = () =>  {
        console.log(validated);
        if (validated == true) {
            return(<Redirect to="/user_dashboard"/>);
        }
    }

      return (
        <Container className = "font" fluid>
            <SignInNav/>
                <Container className = "left-container animate__animated animate__slideInRight" fluid>
                    <Table className = "animate__animated animate__fadeIn animate__delay-1s">
                            <Row>
                                <h1 className = "mx-auto sign-in-header">Sign In</h1>
                            </Row>
                            <Row>
                                <div class="g-signin2 mx-auto" data-onsuccess="onSignIn" ></div>
                            </Row>
                            <Row style = {{paddingTop: '1rem', color: 'gray'}}> 
                            <p className = "mx-auto">or use your account</p>
                            </Row>
                            <Col>
                                <Form className = "mx-auto" style = {{width: '60%'}} onSubmit={handleSubmit}>
                                    <Form.Row>
                                        <Form.Control type = "email" placeholder = "Email" required/>
                                    </Form.Row>
                                    <Form.Row className = "padding">
                                        <Form.Control type = "password" placeholder = "Password" required/>
                                    </Form.Row>
                                    <Form.Row className = "padding">
                                        <Button variant="primary" style = {{border: 'hidden', width: '40%', fontWeight: 'bold', fontSize: '1.2rem'}}
                                         size = "lg"  type="submit" className = "btn-rounded mx-auto">sign in</Button>
                                        {redirectLogin()}
                                    </Form.Row>
                                    <Nav className="justify-content-center" activeKey="/home">
                                        <Nav.Item>
                                            <Nav.Link href="/password">Forgot Password?</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Form>
                            </Col>
                    </Table>
                </Container>

                <Container className = "sign-in-bg animate__animated animate__slideInLeft" fluid>
                    <Table className = "animate__animated animate__slideInRight">
                        <Row>
                            <h1 className = "title header mx-auto welcome-header">Hello, Friend!</h1>
                        </Row>
                        <Row>
                            <p className = "mx-auto white">Don't have an account?</p>
                        </Row>
                        <Row>
                            <p className = "mx-auto white">Click the button below to register!</p>
                        </Row>
                        <Row>
                            <Button href="/signin" variant = "outline-light" size = "lg" className = "btn-rounded mx-auto btn-sign-in" href = "/signup">sign up</Button>
                        </Row>
                    </Table>
                </Container>
            </Container>
      );
}
export default SignIn;