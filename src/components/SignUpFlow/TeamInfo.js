import React from 'react';
import {Container, Button, Form, Row, Col, Table} from 'react-bootstrap';
import {SimpleNav} from '../SimpleNav.js';
import InviteTeamForm from './InviteTeamForm.js';


export default class ChooseFlow extends React.Component {
    state = {
        name: '',
        error: null
    }
    handleChange = (evt) => {
        this.setState({
            name: evt.target.value,
            error: null
        });
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    continue = e => {
        e.preventDefault();
        let error = null;
        if (this.name === "") {
            error = "Please enter in a team name";
            this.setState({ error });
        } else {
            this.props.nextStep();
        }
    };
    //animate__animated animate__fadeInUpBig animate__slow
    //animate__animated animate__slideInUp
//animate__animated animate__fadeInUpBig animate__slow
    render() {
        const {values, inputChange} = this.props;
        return(
            <Container className = "font" fluid>
                <SimpleNav/>
                <Container className = "sign-up-bg" fluid>
                    <Table className = "">
                            <Row>
                                <h2 className = "header mx-auto text-center px-md-3 px-sm-3" style = {{color: 'white'}}>Team Information</h2>
                            </Row>
                    </Table>
                </Container>
            
                <Container className = "right-container" fluid>
                    <Table>
                            <Row>
                                <Form.Group className = "mx-auto w-75">
                                    <Form.Label>Name your Team</Form.Label>
                                    <Form.Control placeholder = "Team Name" value = {this.state.name} onChange = {this.handleChange}></Form.Control>
                                </Form.Group>
                            </Row>
                            <Row>
                                <InviteTeamForm/>
                            </Row>
                            <Row>
                                <Col lg={6} md={6} sm={6}>
                                    <Button className = "font-weight-bold ml-5 mt-5 float-left" variant = "link" onClick={this.back}> {'<'} Back</Button>
                                    
                                </Col>
                                <Col lg={6} md={6} sm={6}>
                                    <Button className = "btn-rounded font-weight-bold mr-5 mt-5 float-right" variant = "primary" onClick={this.continue}>
                                        Next
                                        
                                    </Button>
                                </Col>
                            </Row>
                    </Table>
                </Container>
            </Container>
        );
    }
}