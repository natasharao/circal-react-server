import React, {useState} from 'react';
import AddKey from './AddKey.js';
import {Card, Row, Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

library.add(faCircle);

class AddKeyCard extends React.Component { 
    constructor() {
        super();
        this.state = {
            data: [{item: 'test item', color: '#02FDE1'}]
        };
    }
    render() {
        return(
            <Card className = "mx-auto w-50 mt-5 h-100">
                <Card.Body>
                    <Row>
                        <Col lg={8} md={8} sm={8} xs={8}>
                        <h6 className="mt-2 pt-1">Keys</h6>
                        </Col>
                        <Col lg={4} md={4} sm={4} xs={4}>
                            <AddKey/>
                        </Col>
                    </Row>
                    <div>
                    {this.state.data.map((dynamicComponent, item) => <Content key = {item} componentData = {dynamicComponent}/>)}
                    </div>
                </Card.Body>
            </Card>
        );
    }
}


class Content extends React.Component {
    render() {
       return (
          <div>
             <div>
                 <FontAwesomeIcon icon="circle" className = "mr-2"color = {this.props.componentData.color}/> 
                 {this.props.componentData.item} 
            </div>
          </div>
       );
    }
 }

export default AddKeyCard;