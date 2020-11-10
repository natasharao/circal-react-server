import React from 'react';
import {Link} from 'react-router-dom';
import {Image, Button, Container, Navbar, Row, Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faInstagram, faFacebookSquare, faLinkedin, faTwitterSquare } from "@fortawesome/free-brands-svg-icons"
import './../css/Pricing.css';


library.add(fab, faEnvelope);

const BottomImageContainer = {
    position: 'absolute',
    left: 0,
    minHeight: '25%',
    minWidth:'100%',
    width: '100%',
    backgroundColor: '#B0B4C3',
    zIndex:0

  };

  const NavBarStyle = {
    position: 'absolute',
    left: 0,
    right: 0,
    marginTop: '1rem',
    width: '100%',
};

const bottomSyle = {
    fontFamily: 'Jost',
}

export class GrayFooter extends React.Component {
    render() {
        return(
            <Container style={bottomSyle}>
                <Image src="./assests/AboutBottomLogo.svg" style={BottomImageContainer} sticky='bottom'/>
                    <Row className="colStyle">
                        <Col lg={2} md={2} xs={1}>
                        <Row>
                            <Col>
                                <Row style={{marginBottom: '10px'}}>
                                    <a style={{fontSize: '15px'}, {color: '#4A4D50'}}  href="/features"> features </a>
                                </Row>
                                <Row style={{marginBottom: '10px'}}>
                                    <a style={{fontSize: '15px'}, {color: '#4A4D50'}}  href="/pricing"> pricing </a>
                                </Row>
                                <Row style={{marginBottom: '7px'}}>
                                    <a style={{fontSize: '10px'}, {color: '#4A4D50'}}  href="/about"> about </a>
                                </Row>
                            </Col>
                            <Col>
                                <Row style={{marginBottom: '10px'}}>
                                    <a style={{fontSize: '15px'}, {color: '#4A4D50'}}  href="/contact"> contact </a>
                                </Row>
                                <Row style={{marginBottom: '10px'}}>
                                    <a style={{fontSize: '15px'}, {color: '#4A4D50'}}  href="/signin"> login </a>
                                </Row>
                                <Row style={{marginBottom: '7px'}}>
                                    <a style={{fontSize: '10px'}, {color: '#4A4D50'}}  href="/signup"> signup </a>
                                </Row>
                            </Col>
                        </Row>
                        </Col>
                        <Col style={{float:'right'}, {textAlign: 'right'}, {alignContent: 'right'}, {paddingLeft: '23%'}}>
                            <Row>
                                <a className='logo' style={{marginTop: '7px'}}  href="/">o</a>
                                <a className='logoTitle' style={{fontSize: '40px'}, {color: '#8A8D90'}}  href="/">circal</a>
                            </Row>
                                                            

                        </Col>
                        
                        <Col style={{alignContent: 'right'}, {float: 'right'}, {textAlign: 'right'}, {marginLeft: '10%'}, {marginTop: '15px'}}>
                            <Row style={{marginBottom: '10px'}}>
                                <Col lg={3} style={{padding:'3px'}}>
                                    
                                </Col>
                                <Col style={{padding:'3px'}, {alignContent: 'center'}, {float: 'center'}, {textAlign: 'center'}}>
                                    <a href ="https://www.linkedin.com" style={{padding:'5px'}}>
                                        <FontAwesomeIcon icon={faLinkedin} size='2x' style={{color: '#8A8D90'}}/>
                                    </a>
                                    <a href = "https://instagram.com" style={{padding:'5px'}}>
                                        <FontAwesomeIcon icon={faFacebookSquare} size='2x' style={{color: '#8A8D90'}}/>
                                    </a>
                                    <a href = "https://facebook.com" style={{padding:'5px'}}>
                                        <FontAwesomeIcon icon={faTwitterSquare} size='2x' style={{color: '#8A8D90'}}/>
                                    </a>
                                    <a href = "https://twitter.com" style={{padding:'5px'}}>
                                        <FontAwesomeIcon icon={faInstagram} size='2x' style={{color: '#8A8D90'}}/>
                                    </a>
                                </Col>
                            </Row>
                            <Row style={{float: 'right'}, {textAlign: 'right'}, {alignContent: 'right'}}>
                                <Col lg={4} md={2} xs={1}>
                                    
                                </Col>
                                <a className="footerInfo" style={{color: '#4A4D50'}}  href="/"> copyright </a>
                                <p className="footerInfo" style={{color: '#4A4D50'}}  href="/"> - </p>
                                <a className="footerInfo" style={{color: '#4A4D50'}}  href="/privacy_policy"> privacy </a>
                                <p className="footerInfo" style={{color: '#4A4D50'}}  href="/"> - </p>
                                <a className="footerInfo" style={{color: '#4A4D50'}}  href="/"> terms </a>

                            </Row>
                            {/* <Row style={{float: 'right'}, {textAlign: 'right'}, {alignContent: 'right'}}>
                                <Col lg={7} md={4} xs={1}>
                                    
                                </Col>
                                <button
                                    type="button"
                                    className='subscriptionButton'
                                >
                                    Subscribe to Emails
                                </button>
                            </Row> */}
                        </Col>
                        
                    </Row>
                        
            </Container>
        );
    }
}

export default GrayFooter;