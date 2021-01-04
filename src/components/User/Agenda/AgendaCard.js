import React from 'react';
import {Accordion, Button, Card, Row, Col} from 'react-bootstrap';
import ParticipantGroup from './ParticipantGroup.js';

function AgendaCard({title, description, meetingRoom}) {
    const handleMeetingRoomLink = () => {
        if (meetingRoom == 'Zoom') {
            return(
                <a className="text-white" 
                style={{fontSize: '14px'}} 
                href="https://sjsu.zoom.us/j/89781931155?pwd=ZGxyUFh5K0xrS1dudnFyemxRcUVXdz09">
                Zoom
                </a>
            );
        } else {
            return(
                <p className = "text-white font-weight-bold my-auto" style={{fontSize: '14px'}} >{meetingRoom}</p>
            );
        }
    };
    return(
        <Accordion>
            <Card className = "border-0 rounded" style = {{width: '300%'}}>
                <Row>
                    <Col className = "w-25">
                        <Card.Subtitle className = "w-50 mb-2 pb-2 pt-2 badge mt-0 rounded-0 bg-primary">
                              {handleMeetingRoomLink()}
                        </Card.Subtitle>
                    </Col>
                    <Col className="w-75">
                        <ParticipantGroup/>
                    </Col>
                </Row>
                <Card.Body>
                    <Row>
                        <Col>
                            <Card.Title className = "pt-1 font-weight-bold text-gray">{title}</Card.Title>
                        </Col>
                        <Col>
                            {/* <img src = "./public/assests/MeetingDot.svg"/> */}
                        </Col>
                    </Row>
                
                    <Card.Text className = "text-muted">
                        {description}
                    </Card.Text>
                    <Accordion.Toggle as={Button} size="sm" className = "btn-rounded" variant="link" eventKey="0">
                        View Agenda
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Card.Title className="text-center text-primary font-weight-bold">Agenda Topics</Card.Title>
                            <Row xs={2} md={2} lg={2} className = "mx-auto" style = {{paddingTop: '1rem'}}>
                                <Col lg={2} style = {{paddingTop: '0.6rem'}}>
                                    <Card.Subtitle className="mb-2 text-muted">15 mins</Card.Subtitle>
                                </Col>
                                <Col lg={10}>
                                    <Card.Text className="mb-2">
                                        1. Review and modify agenda
                                    </Card.Text>
                                </Col>
                            </Row>
                            <Row xs={2} md={2} lg={2} className = "mx-auto" style = {{paddingTop: '1rem'}}>
                                <Col lg={2} style = {{paddingTop: '0.6rem'}}>
                                    <Card.Subtitle className="mb-2 text-muted">30 mins</Card.Subtitle>
                                </Col>
                                <Col lg={10}>
                                    <Card.Text className="mb-2">
                                        2. Review possible code defects
                                    </Card.Text>
                                </Col>
                            </Row>
                            <Row xs={2} md={2} lg={2} className = "mx-auto" style = {{paddingTop: '1rem'}}>
                                <Col lg={2} style = {{paddingTop: '0.6rem'}}>
                                    <Card.Subtitle className="mb-2 text-muted">30 mins</Card.Subtitle>
                                </Col>
                                <Col lg={10}>
                                    <Card.Text className="mb-2">
                                        3. Go over product launch details
                                    </Card.Text>
                                </Col>
                            </Row>
                            <Row xs={2} md={2} lg={2} className = "mx-auto" style = {{paddingTop: '1rem'}}>
                                <Col lg={2} style = {{paddingTop: '0.6rem'}}>
                                    <Card.Subtitle className="mb-2 text-muted">30 mins</Card.Subtitle>
                                </Col>
                                <Col lg={10}>
                                    <Card.Text className="mb-2">
                                        4. Finalize product launch presentation
                                    </Card.Text>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card.Body>
            </Card>
        </Accordion>
    );
}

export default AgendaCard;