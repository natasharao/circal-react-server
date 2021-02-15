import React from 'react';
import SideNavigation from '../SideNavigation.js';
import TopNav from '../TopNav.js';
import {Container, Card, Tab, Row, Col, Nav, Button} from 'react-bootstrap';
import CompanyMemberCards from './CompanyMemberCards';

export default class TeamDashboard extends React.Component {

    render() {
        return(
            <Container className = "dashboard-bg overflow-auto font" fluid>
                <TopNav pageActive = "Team"/>
                <SideNavigation activeURL = "/my_team"/>
                <Container className = "pr-0 mr-0" style = {{marginLeft: '12%', minWidth: '85vw'}}>
                    <Tab.Container defaultActiveKey="first">
                        <Row lg={12} className = "mt-4">
                                <Col lg={4} className = "pl-5">
                                    <Row>
                                        <Col lg={7} md ={6} sm={6} classNaame = "align-self-center">
                                            <h2 className="text-truncate text-gray pl-4 pt-3">All Members</h2>
                                        </Col>
                                        <Col lg={5} md ={6} sm={6} className ="pl-0 ml-0  align-self-center">
                                            <p className = "text-muted float-left mt-4">20 total</p>
                                        </Col>
                                    </Row>
                                </Col>

                                <Col lg={8} className ="pl-5 align-items-right">
                                    <Nav className="flex-column">
                                        <Row>
                                            <Col lg={6} md={6} sm={6} className = "pr-0 mr-0">
                                                <Nav.Item>
                                                    <Nav.Link eventKey="first" id="all-members">
                                                        <Button className = "btn-rounded w-25 float-right">All</Button>
                                                    </Nav.Link>
                                                </Nav.Item>
                                            </Col>
                                            <Col lg={6} md={6} sm={6} className = "pl-0 ml-0 my-auto">
                                                <Nav.Item>
                                                    <Nav.Link eventKey="second" className = "float-left" id = "team-only">My Team</Nav.Link>
                                                </Nav.Item>
                                            </Col>
                                        </Row>
                                    </Nav>
                                </Col>
                        </Row>
                        <Row lg={12} className = "ml-4 mt-2">
                            <Tab.Content className = "w-100">
                            <Tab.Pane eventKey="first">
                                <CompanyMemberCards getAll={true}/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <Button className = "btn-rounded float-left mb-5 ml-4 font-weight-bold">Add Member +</Button>
                                <CompanyMemberCards getAll={false}/>
                            </Tab.Pane>
                            </Tab.Content>
                        </Row>
                      </Tab.Container>
                </Container>
            </Container>
        );
    }
}