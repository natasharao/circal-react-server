import React from 'react'
import {Container, Button, Form, Image, Table, Row, Col, ButtonGroup, ToggleButton, Card, ToggleButtonGroup, ResponsiveEmbed, Pagination} from 'react-bootstrap'
import '../../css/signup.css';
import {useState} from 'react';
import SimpleNav from '.././SimpleNav';

function BillingInfo({values, inputChange, nextStep, prevStep}) {

  const [checked, setChecked] = useState(false);
  const [planChoice, setPlanChoice] = useState('');

  const radios = [
    { name: 'college', value: '1', description: 'if you\'re in college', imgUrl: '../assests/innovation_.svg'},
    { name: 'teams', value: '2' , description: 'for your team', imgUrl: '../assests/team_work.svg'},
    { name: 'enterprise', value: '3', description: 'for your company', imgUrl: '../assests/achievement_.svg'},
  ];

    function handleNext() {
        nextStep();
    }

    function handlePrev() {
        prevStep();
    }

    return(
            <Container className="font" fluid>
                <SimpleNav/>
                <Container className = "sign-up-bg" fluid>
                    <Table className = "animate__animated animate__fadeInUpBig animate__slow">
                            <Row>
                                <h2 className = "header mx-auto text-center px-md-3 px-sm-3" style = {{color: 'white'}}>Choose a plan</h2>
                            </Row>
                    </Table>
                </Container>

                <Container className = "right-container animate__animated animate__fadeInUpBig animate__slow min-vh-100" fluid>
                     <Row className = "min-vh-100 mb-n5" style = {{minWidth: '50vw'}}>
                         <Col className = "mx-auto w-50 my-auto">
                            <Row className = "center w-100"> 
                                <ButtonGroup toggle>
                                    {radios.map((radio, idx) => (
                                    <ToggleButton
                                        key={idx}
                                        className = "w-100 pr-1 pl-1"
                                        style = {{minWidth: '40%'}}
                                        type="radio"
                                        variant="outline-light"
                                        name="radio"
                                        value={radio.name}
                                        checked={planChoice === radios.name}
                                        onChange={inputChange('plan')}>
                                            <Card className = "w-100 h-100 mr-5 ml-n3">
                                                <Card.Header>
                                                    {radio.name}
                                                </Card.Header>
                                                <ResponsiveEmbed aspectRatio="16by9">
                                                    <Image src={radio.imgUrl}/>
                                                </ResponsiveEmbed>
                                                <Card.Body>
                                                    {radio.description}
                                                </Card.Body>
                                            </Card>
                                    </ToggleButton>
                                    ))}
                                </ButtonGroup>
                            </Row>
                            <Row className = "mt-5">
                                <Col lg={6} md={6} sm={6}>
                                    <Button className = "mr-5 mt-5 float-left" onClick={handlePrev}>back</Button>
                                </Col>
                                <Col lg={6} md={6} sm={6}>
                                    <Button className = "ml-5 mt-5 float-right" onClick={handleNext}>next</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Container>
    );
}


export default BillingInfo;