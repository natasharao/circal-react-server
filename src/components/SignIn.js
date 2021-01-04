import React, {useState} from 'react';
import {Image, Button, ButtonToolbar} from 'react-bootstrap';
import { Container, Row, Col, CardGroup, Card, Fade, Nav} from 'react-bootstrap';
import {Jumbotron, Form, Table} from 'react-bootstrap';
import { withRouter } from 'react-router';
import {SignInNav} from './SignInNav.js';
import '.././App.css';
import '.././css/signin.css';
import { Redirect } from 'react-router-dom';
import {GoogleLogin} from 'react-google-login';
import {useGoogleLogin} from 'react-google-login';
import { useHistory } from 'react-router-dom';

function SignIn() {
    // function onSignIn(googleUser) {
    //     var profile = googleUser.getBasicProfile();
    //     console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    //     console.log('Name: ' + profile.getName());
    //     console.log('Image URL: ' + profile.getImageUrl());
    //     console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    //     var element = document.getElementById("someID");
    //     element.textContent =  "<p style ={{color: 'white'}}>hello</p>";
    // }

    const [validated, setValidated] = useState(false);
    const history = useHistory();

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        }
        setValidated(true);
        history.push('/user_dashboard');
    };

    // const redirectLogin = () =>  {
    //     console.log(validated);
    //     if (validated == true) {
    //         return(<Redirect to="/user_dashboard"/>);
    //     }
    // }

    const clientID = '48486634238-ad8tcvmn9b5eheiqtbbgiv8srsekm9he.apps.googleusercontent.com';
    const onSuccess = (res) =>  {
        console.log('Login Successful: user - ', res.profileObj);
        // history.push('/user_dashboard');
    }

    const onFailure = (res) => {
        console.log('Login Failed: res: ', res);
    }

    const { signIn } = useGoogleLogin ({
        onSuccess,
        onFailure,
        clientID,
        isSignedIn: true,
        accessType: 'offline'
        // responseType: 'code',
        // prompt: 'consent'
    })

      return (
        <Container className = "font" fluid>
            <SignInNav/>
                <Container className = "left-container animate__animated animate__slideInRight" fluid>
                    <Table className = "animate__animated animate__fadeIn animate__delay-1s">
                            <Row>
                                <h1 className = "mx-auto sign-in-header">Sign In</h1>
                            </Row>
                            <Row>
                                <GoogleLogin clientId = {clientID} buttonText = "Sign in with Google"
                                className = "mx-auto justify-content-center btn-rounded shadow-sm border-light w-25"
                                onSuccess = {onSuccess} onFailure = {onFailure}
                                cookiePolicy = {'single_host_origin'} isSignedIn = {true}/>
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
                            <h1 className = "title header mx-auto welcome-header">Welcome back!</h1>
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