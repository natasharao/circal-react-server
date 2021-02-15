import React from 'react';
import {Container} from 'react-bootstrap';
import {Tooltip, OverlayTrigger} from 'react-bootstrap';

function ParticipantGroup({meetingID}) {
    const meeting1 = [
        {name: 'Me', url: './assests/ProfileHolder1.jpg'},
        {name: 'Joshua M.', url: './assests/ProfileHolder2.jpg'},
        {name: 'Emily Y.', url: './assests/ProfileHolder3.jpg'}
    ];
    const meeting2 = [
        {name: 'Me', url: './assests/ProfileHolder1.jpg'}, 
        {name: 'Joshua M.', url: './assests/ProfileHolder2.jpg'}, 
        {name: 'Steve K.', url: './assests/ProfileHolder4.jpg'}];
    const meeting3 = [
        {name: 'Me', url: './assests/ProfileHolder1.jpg'},
        {name: 'Steve K.', url: './assests/ProfileHolder4.jpg'}
    ];

    const renderProfile = (member, index) => {
        return(
            getAvatar(member)
        );
    }

    function getAvatar(member) {
        return(
        <OverlayTrigger placement = "top" overlay={
            <Tooltip id="tooltip-top">
                {member.name}
            </Tooltip>
            }>
            <img alt="Image placeholder" 
            class="avatar rounded-circle float-right m-1" 
            style={{height: '30px', width: '30px'}} 
            src={member.url}/>
        </OverlayTrigger>
        );
    }

    function getInfo() {
        if (meetingID === "1") {
            return meeting1;
        } else if (meetingID === "2") {
            return meeting2;
        } else if (meetingID === "3") {
            return meeting3;
        }
    }

    return(
        <div className = "pt-2 avatar-group">
            {getInfo().map(renderProfile)}
        </div>
    );
}

export default ParticipantGroup;