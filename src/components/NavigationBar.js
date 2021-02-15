import React, {Component, Container} from 'react';
import './../App.css';
import {Nav, Navbar, Row, Button} from 'react-bootstrap';

const NavBarStyle = {
    position: 'absolute',
    left: 0,
    right: 0,
    marginTop: '1rem',
    width: '100%',
    height: '7%',
    fontSize: '1.2rem',
    zIndex:2
};

export class NavigationBar extends React.Component {
    render() {
        
      return (
            <Navbar expand="lg" scrolling light variant="dark" style = {NavBarStyle} className = "font fixed-top" fluid>
                <Navbar.Brand style = {{fontSize: '2rem', paddingLeft: '1rem'}} href="/">
                    <Row>
                    <img
                    alt=""
                    src="/assests/LogoImage.png"
                    className = "ml-5"
                    width = "55"c
                    height = "40"
                    />
                    <h1>circal</h1>
                </Row>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse className = "justify-content-center ml-lg-n5" id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link href="/home"></Nav.Link>
                        <Nav.Link href="/features" className = "mr-3">Features</Nav.Link>
                        <Nav.Link href="/pricing" className = "mr-3">Pricing</Nav.Link>
                        <Nav.Link href="/about" className = "mr-3">About</Nav.Link>
                        <Nav.Link href="/contact" className = "mr-3">Contact</Nav.Link>
                        <Nav.Link href="/signin" className = "ml-lg-5 mr-4">Login</Nav.Link>
                        <Button variant = "outline-light" href= "/signup" className = "mr-lg-5 w-25 my-auto font-weight-bold btn-rounded">Sign Up</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
      );
    }
}
export default NavigationBar;