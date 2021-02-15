import React from 'react';
import {Accordion, Button, Form, Card, Row, Col} from 'react-bootstrap';
import ParticipantGroup from './ParticipantGroup.js';

function AgendaCard({title, description, meetingRoom, idString}) {
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
        <Accordion className = "border border-4 border-top-0 border-bottom-0 rounded-top border-primary">
                <img src = "../../assests/MeetingDot.svg"
                width = "20px"
                className = "position-absolute top-50 ml-n2 mt-5 translate-middle-y" style = {{zIndex: '4'}}/>
                <Card className = "border-0 rounded" style = {{width: '300%', zIndex: '2',
                 }}>
                    <Row>
                        <Col className = "w-25">
                            <Card.Subtitle className = "w-50 mb-2 pb-2 pt-2 badge mt-0 rounded-0 bg-primary">
                                {handleMeetingRoomLink()}
                            </Card.Subtitle>
                        </Col>
                        <Col className="w-75">
                            <ParticipantGroup meetingID = {idString}/>
                        </Col>
                    </Row>
                    <Card.Body>
                        <Row className = "position-relative">
                            <Col>
                                <Card.Title className = "pt-1 font-weight-bold text-gray">{title}</Card.Title>
                            </Col>
                        </Row>
                        <Card.Text className = "text-muted">
                            <strong>Purpose: </strong> {description}
                        </Card.Text>
                        <Accordion.Toggle as={Button} size="sm" className = "btn-rounded" variant="link" eventKey="0">
                            View Agenda
                            {/* <Button className = "float-right text-white btn-rounded font-weight-bold" size="sm" variant = "primary">View Agenda</Button> */}
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
                                        <Card.Text className = "text-muted">
                                            <Form.Check custom className = "ml-3" id = "custom-check" type="checkbox" label = "What are our goals for the upcoming days?"/>
                                            <Form.Check custom className = "ml-3" id = "custom-check" type="checkbox" label = "Are there any concerns with the existing agenda?"/>
                                            <Form.Check custom className = "ml-3" id = "custom-check" type="checkbox" label = "Each member present progress"/>
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
                                        <Card.Text className = "text-muted">
                                            <Form.Check custom className = "ml-3" id = "custom-check" type="checkbox" label = "Go over progress in the newsletter sign up page"/>
                                            <Form.Check custom className = "ml-3" id = "custom-check" type="checkbox" label = "Discuss ways to solve bug and delegate"/>
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
                                        <Card.Text className = "text-muted">
                                            <Form.Check custom className = "ml-3" id = "custom-check" type="checkbox" label = "Discuss timeline for social media posts"/>
                                            <Form.Check custom className = "ml-3" id = "custom-check" type="checkbox" label = "Go over current progress and social engagement insights"/>
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
                                        <Card.Text className = "text-muted">
                                            <Form.Check custom className = "ml-3" id = "custom-check" type="checkbox" label = "Run through and refine presentation with team"/>
                                        </Card.Text>
                                    </Col>
                                </Row>
                                <Row style = {{paddingTop: '1rem'}}>
                                    <h5 className = "text-center mx-auto text-primary font-weight-bold">Notes</h5>
                                </Row>
                                <Row className = "w-75 mx-auto" style = {{paddingTop: '1rem'}}>
                                    <p>
                                         Here are the meeting notes and a more in depth explanation of the meeting plan. You can put ground rules or any
                                         extra information here. This meeting requires all hands on deck and all members should be prepared to go over
                                        their individual progress.
                                    </p>
                                </Row>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card.Body>
                </Card>
        </Accordion>
    );
}

export default AgendaCard;