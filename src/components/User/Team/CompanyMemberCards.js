import React, {useState} from 'react';
import {Container, Card, Button, Row, Col, ResponsiveEmbed, Image} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faEllipsisH);

function CompanyMemberCards({getAll}) {
    const teamInformation =[
        {image: './assests/NatashaProfile.png', name: 'Natasha Rao', role: 'CEO'},
        {image: './assests/AarushiProfile.png', name: 'Aarushi Upadhayaya', role: 'CTO'},
        {image: './assests/MirandaProfile.png', name: 'Miranda Chai', role: 'CXO'},
    ];

    const companyInfo =[
        {image: './assests/NatashaProfile.png', name: 'Natasha Rao', role: 'CEO'},
        {image: './assests/SachiProfile.png', name: 'Sachi Tolani', role: 'CMO'},
        {image: './assests/AnishaProfile.png', name: 'Anisha Bhat', role: 'Product Manager'},
        {image: './assests/AarushiProfile.png', name: 'Aarushi Upadhayaya', role: 'CTO'},
        {image: './assests/MirandaProfile.png', name: 'Miranda Chai', role: 'CDO'},
        {image: './assests/NatashaProfile.png', name: 'Natasha Rao', role: 'CEO'},
        {image: './assests/NatashaProfile.png', name: 'Natasha Rao', role: 'CEO'},
        {image: './assests/NatashaProfile.png', name: 'Natasha Rao', role: 'CEO'},
        {image: './assests/NatashaProfile.png', name: 'Natasha Rao', role: 'CEO'},
        {image: './assests/NatashaProfile.png', name: 'Natasha Rao', role: 'CEO'},
    ];

    function getCardInfo() {
        if (getAll == false) {
            return teamInformation;
        } else {
            return companyInfo;
        }
    }


    const renderCard = (card, index) => {
        return(
            <Card key = {index} className="box member-card mx-2 my-2">
                <Card.Header className = "h-50 mx-auto mt-4 mb-n1" style = {{backgroundColor: 'transparent', border: '0px'}}>
                    <Image variant = "top" className = "h-100 mx-auto" src={card.image} roundedCircle></Image>
                </Card.Header>
                <Card.Title className = "center text-primary">{card.name}</Card.Title>
                <p className = "text-muted center mt-n2">{card.role}</p>
                <Button variant="link" className = "w-25 center mx-auto font-weight-bolder mt-n4" style={{fontSize: '20px'}}>+</Button>
            </Card>
        );
    }


    return(
        <div className = "grid">
            {getCardInfo().map(renderCard)}
        </div>
    );
}

export default CompanyMemberCards;