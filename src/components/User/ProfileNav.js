import React from 'react'
import {Container, Media, Row, Col, Button, ResponsiveEmbed, DropdownButton, Dropdown, ButtonGroup, DropdownMenu} from 'react-bootstrap'
import { faBars, faBell, faSignOutAlt, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {Nav, Navbar} from 'react-bootstrap';


library.add(faBars, faBell, faSignOutAlt, faAngleDown)

function ProfileNav({userFirstName}) {
        function checkName() {
            if (userFirstName) {
                return userFirstName
            }else {
                return "firstName"
            }
        }
        return(
        <Container className = "pl-0 pr-0 mr-0 w-100">
            <Media className = "pl-5 w-100">
                <Row lg = {12}>
                    <Col lg ={1} className = "pt-3 pr-4">
                        <FontAwesomeIcon icon = "bell"/>
                    </Col>
                    <Col lg={2}>
                        <img
                        roundedCircle
                        src="./assests/AnishaProfile.png"
                        width = "50px"
                        height = "50px"
                        />
                    </Col>
                    <Col className = "pl-4 pt-3 ml-2">
                        <Media.Body>
                            <Row>
                                <Col>
                                    <h6>{checkName()}</h6>
                                </Col>
                                <Col className = "pl-0 mt-n2 ml-n3">
                                <DropdownButton expand='lg' variant = "link" size = "sm" id="profile-nav-dropdown-menu" className = "mt-1" alignRight>
                                    <Dropdown.Item id="profile-nav-item" style = {{color: 'gray', fontSize: '0.9rem'}}>Account</Dropdown.Item>
                                    <Dropdown.Item id="profile-nav-item" style = {{color: 'gray', fontSize: '0.9rem'}}>Settings</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item id="profile-nav-item" style = {{color: 'gray', fontSize: '1rem'}} href = "/">Logout</Dropdown.Item>
                                </DropdownButton>
                                </Col>
                            </Row>
                        </Media.Body>
                    </Col>
                </Row>
            </Media>
        </Container>
        );
}

export default ProfileNav;

/*

            */