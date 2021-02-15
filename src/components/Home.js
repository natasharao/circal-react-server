import React from 'react';
import {Nav, Navbar, Image, Button, ButtonToolbar, Table, ResponsiveEmbed} from 'react-bootstrap';
import { Container, Row, Col, CardGroup, Card} from 'react-bootstrap';
import {FeaturesSection} from './FeaturesSection.js';
import '.././App.css';
import {GetStartedCard} from './GetStartedCard.js';
import {ProblemStats} from './ProblemStats.js';
import {NavigationBar} from './NavigationBar.js';
import {PinkFooter} from './PinkFooter';


const OtherStyle = {
  position: 'absolute',
  zIndex:2,
  left: 0,
  right: 0,
  minWidth: '100%',
  width:'100%'
};

const HeroImageContainer = {
  position: 'absolute',
  left: 0,
  right: 0,
  zIndex:0,
};

const BottomImageContainer = {
  position: 'absolute',
  left: 0,
  right: 0,
  marginBottom: 0,
  zIndex:0
};

export class Home extends React.Component {
    render() {
      return (
        <Container className = "min-vw-100" fluid>
          <NavigationBar />
          <Container style = {HeroImageContainer} sm = {12} md = {12} fluid>
            <source media="(min-width: 1440px)" srcset="./assests/PinkGradient.svg"/>
            <source media="(min-width: 780px)" srcset="./assests/PinkHeader.svg"/>
             <img src="/assests/PinkGradient.svg" style={HeroImageContainer} className = "min-vw-100 mx-0 px-0 sticky-top"/>
            <Container style = {OtherStyle} fluid>
              <Row>
                <Container className = "font header">
                  <Row style = {{display: 'flex', justifyContent: 'center'}}>
                      <h1 className="title header animate__animated animate__fadeInDown">
                        Meetings made easy.
                      </h1>
                  </Row>

                  <Row>
                    <Col lg = {5} md = {5} sm = {6} xs={6} className = "mx-auto">
                      <p className = "paragraph-header text-center animate__animated animate__fadeInDown">Circal is a smart scheduling software for 
                      the workplace to make lives easier and teams more efficient.</p> 
                    </Col>
                  </Row>

                  <Row className = "center">
                      <Button variant="outline-light" style = {{width: '20%'}} 
                      className = "btn-rounded animate__animated animate__fadeIn" href = "/signin">sign in</Button>
                  </Row>
                </Container>
              </Row>
              <Row className = "center padding">
                    <Col lg="mx-auto font">
                        <h1 className="text">The problem is in the numbers.</h1>
                    </Col>
              </Row>
              <Row style = {{marginBottom: '5%'}}>
                <ProblemStats/>
              </Row>
              <Row className = "pb-5">
                <FeaturesSection/>
              </Row>
              <Row className = "pt-5">
                <GetStartedCard/>
              </Row>
              <Container>
                <PinkFooter/>
              </Container>
            </Container>
            
          </Container>
        </Container>
        
      );
    }
}

export default Home;
