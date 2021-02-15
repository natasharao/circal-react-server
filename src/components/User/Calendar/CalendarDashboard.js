import React from 'react';
import {Container, Row, Col, Button, Card} from 'react-bootstrap';
import TopNav from '../TopNav.js';
import SideNavigation from '../SideNavigation.js';
import CalendarHome from '../Home/CalendarHome.js';
import AddKeyCard from './AddKeyCard.js';

export default class CalendarDashboard extends React.Component {
    
    render() {
        return(
            <Container className = "dashboard-bg overflow-auto font" fluid>
                <TopNav pageActive = "Calendar"/>
                <SideNavigation activeURL = "/my_calendar"/>
                <Container className = "pr-0 mr-0" style = {{marginLeft: '12%', minWidth: '85vw'}}>
                    <Row>
                        <Col>
                            <Row>
                                <Col>
                                   <AddKeyCard/>
                                </Col>
                            </Row>
                        </Col>
                        <Col className = "mt-5">
                            <CalendarHome/>
                        </Col>
                    </Row>
                </Container>
            </Container>
        );

    }

}