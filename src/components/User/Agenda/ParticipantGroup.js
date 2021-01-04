import React from 'react';
import {Container} from 'react-bootstrap';
import {Tooltip, OverlayTrigger} from 'react-bootstrap';

function ParticipantGroup() {
    return(
        <Container className = "pt-2 avatar-group">
            <OverlayTrigger placement = "top" overlay={
                <Tooltip id="tooltip-top">
                    Member 3
                </Tooltip>
                }>
                <img alt="Image placeholder" 
                class="avatar rounded-circle float-right m-1" 
                style={{height: '30px', width: '30px'}} 
                src="https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-4.jpg"/>
            </OverlayTrigger>

            <OverlayTrigger placement = "top" overlay={
                <Tooltip id="tooltip-top">
                    Member 2
                </Tooltip>
                }>
                <img alt="Image placeholder" 
                class="avatar rounded-circle float-right m-1" 
                style={{height: '30px', width: '30px'}} 
                src="https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-4.jpg"/>
            </OverlayTrigger>

            <OverlayTrigger placement = "top" overlay={
                <Tooltip id="tooltip-top">
                    Member 1
                </Tooltip>
                }>
                <img alt="Image placeholder" 
                class="avatar rounded-circle float-right m-1" 
                style={{height: '30px', width: '30px'}} 
                src="https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-4.jpg"/>
            </OverlayTrigger>
        </Container>
    );
}

export default ParticipantGroup;