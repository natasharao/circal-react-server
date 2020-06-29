import React from 'react';
import {Nav, Navbar, Image, Button, ButtonToolbar, ListGroup, ResponsiveEmbed} from 'react-bootstrap';
import { Container, Row, Col, CardGroup, Card, Table} from 'react-bootstrap';
import {Jumbotron} from 'react-bootstrap';
import {NavigationBar} from './NavigationBar.js';
import './../css/Pricing.css';
import './../App.css';
import {GrayFooter} from './GrayFooter';
import Accordion from 'react-bootstrap/Accordion'



const HeroImageContainer = {
    position: 'absolute',
    top:0,
    left:0,
    zIndex:0,
    width:'100%'
};

const OtherStyle = {
  position: 'absolute',
  zIndex:2,
  width:'100%',
};


export class Pricing extends React.Component {
  constructor() {
    super()
    this.state = {
      arrow1: '>',
      arrowState1: '',
      arrow2: '>',
      arrowState2: '',
      arrow3: '>',
      arrowState3: '',
      arrow4: '>',
      arrowState4: '',
      arrow5: '>',
      arrowState5: ''
    }
  }

  accordionArrowOnChange1(e) {
      console.log ('1st acc')
      const opt = this.state.arrowState1
      if (opt.length == 0) {
        this.setState({arrow1: 'v'})
        this.setState({arrowState1: 'on'})
      } else {
        this.setState({arrow1: '>'})
        this.setState({arrowState1: ''})
      }
      this.setState({arrow2: '>'})
      this.setState({arrowState2: ''})

      this.setState({arrow3: '>'})
      this.setState({arrowState3: ''})

      this.setState({arrow4: '>'})
      this.setState({arrowState4: ''})

      this.setState({arrow5: '>'})
      this.setState({arrowState5: ''})
  }

  accordionArrowOnChange2(e) {
      console.log ('2 acc')
      const opt = this.state.arrowState2
      if (opt.length == 0) {
        this.setState({arrow2: 'v'})
        this.setState({arrowState2: 'on'})
      } else {
        this.setState({arrow2: '>'})
        this.setState({arrowState2: ''})
      }
      this.setState({arrow1: '>'})
      this.setState({arrowState1: ''})

      this.setState({arrow3: '>'})
      this.setState({arrowState3: ''})

      this.setState({arrow4: '>'})
      this.setState({arrowState4: ''})

      this.setState({arrow5: '>'})
      this.setState({arrowState5: ''})
  }

  accordionArrowOnChange3(e) {
      console.log ('3 acc')
      const opt = this.state.arrowState3
      if (opt.length == 0) {
        this.setState({arrow3: 'v'})
        this.setState({arrowState3: 'on'})
      } else {
        this.setState({arrow3: '>'})
        this.setState({arrowState3: ''})
      }
      this.setState({arrow1: '>'})
      this.setState({arrowState1: ''})

      this.setState({arrow2: '>'})
      this.setState({arrowState2: ''})

      this.setState({arrow4: '>'})
      this.setState({arrowState4: ''})

      this.setState({arrow5: '>'})
      this.setState({arrowState5: ''})
  }

  accordionArrowOnChange4(e) {
      console.log ('4 acc')
      const opt = this.state.arrowState4
      if (opt.length == 0) {
        this.setState({arrow4: 'v'})
        this.setState({arrowState4: 'on'})
      } else {
        this.setState({arrow4: '>'})
        this.setState({arrowState4: ''})
      }

      this.setState({arrow1: '>'})
      this.setState({arrowState1: ''})

      this.setState({arrow2: '>'})
      this.setState({arrowState2: ''})

      this.setState({arrow3: '>'})
      this.setState({arrowState3: ''})

      this.setState({arrow5: '>'})
      this.setState({arrowState5: ''})
  }

  accordionArrowOnChange5(e) {
      console.log ('5 acc')
      const opt = this.state.arrowState5
      if (opt.length == 0) {
        this.setState({arrow5: 'v'})
        this.setState({arrowState5: 'on'})
      } else {
        this.setState({arrow5: '>'})
        this.setState({arrowState5: ''})
      }

      this.setState({arrow1: '>'})
      this.setState({arrowState1: ''})

      this.setState({arrow2: '>'})
      this.setState({arrowState2: ''})

      this.setState({arrow3: '>'})
      this.setState({arrowState3: ''})

      this.setState({arrow4: '>'})
      this.setState({arrowState4: ''})  
  }

  render() {
    return (
    <Container fluid>
      <NavigationBar />
      <Image src = "./assests/OrangeGradient.svg" style = {HeroImageContainer}/>
      <Container style = {{zIndex: '3'}} fluid>
        <Container className = "header font">
          <Row>
            <h1 className="title mx-auto">Pricing</h1>
          </Row>
					<Row style={{paddingBottom: '10%', zIndex: '2'}}>
            <h2>A plan for everyone.</h2>
          </Row>

          <Row>
          <Col>
            	<Card style = {{border: 'hidden', borderRadius: '15px'}} className = "shadow-lg">
                <h1 className = "mx-auto text-center w-100 rounded-lg pt-3" style = {{background: 'white', color: 'orange'}} as="h2">Student</h1>
                <Card.Body>
                  <blockquote className="blockquote mb-0">

										<Row>
											<Col>
												<h1 className="mx-auto text-center font-weight-bold pb-2" style = {{color:'orange'}}>$0</h1>
											</Col>
										</Row>
                    <ListGroup variant = "flush">
                      <ListGroup.Item className="text-center" style = {{color:'#B0B4C3'}}>
                      max 5 users
                      </ListGroup.Item>
                      <ListGroup.Item className="text-center" style = {{color:'#B0B4C3'}}>
                        meeting scheduling
                      </ListGroup.Item>
                      <ListGroup.Item className="text-center" style = {{color:'#B0B4C3'}}>
                        sync with 1 external calendar
                      </ListGroup.Item>
                      <ListGroup.Item className="text-center" style = {{color:'#B0B4C3'}}>
                        meeting agenda + notes
                      </ListGroup.Item>
                    </ListGroup>
                    

										<Row className = "center pt-3">
              				<Button variant="warning" style = {{backgroundColor: '#FCAD55'}} className = "btn-rounded w-50" href = "/signin">sign up</Button>
                  	</Row>
                  </blockquote>
                </Card.Body>
              </Card>
						</Col>


			      <Col>
            <Card style = {{border: 'hidden', borderRadius: '15px', background: 'white'}} className = "shadow-lg">
                <h1 className = "mx-auto text-center white w-100 rounded-top pt-3" style = {{background: 'white', color: 'orange', borderTop: '25px'}} as="h2">Teams</h1>
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                  <Row>
											<Col className = "pl-0">
												<h1 className="text-center font-weight-bold" style = {{color:'orange'}}>$8</h1>
											</Col>
										</Row>
                    <ListGroup variant = "flush">
                      <ListGroup.Item className="text-center" style = {{color:'#B0B4C3'}}>
                        max 20 users
                      </ListGroup.Item>
                      <ListGroup.Item className="text-center" style = {{color:'#B0B4C3'}}>
                        meeting scheduling
                      </ListGroup.Item>
                      <ListGroup.Item className="text-center" style = {{color:'#B0B4C3'}}>
                        multiple calendar integration
                      </ListGroup.Item>
                      <ListGroup.Item className="text-center" style = {{color:'#B0B4C3'}}>
                        pre-meeting agenda
                      </ListGroup.Item>
                      <ListGroup.Item className="text-center" style = {{color:'#B0B4C3'}}>
                        meeting agenda + notes
                      </ListGroup.Item>
                    </ListGroup>
                    

										<Row className = "center pt-3">
              								<Button variant="warning" style = {{backgroundColor: '#FCAD55'}} className = "btn-rounded w-50" href = "/signin">sign up</Button>
                  	</Row>
                  </blockquote>
                </Card.Body>
              </Card>
						</Col>

						<Col>
            	<Card style = {{border: 'hidden', borderRadius: '15px', background: '#FCAD55'}} className = "shadow-lg">
                <h1 className = "white mx-auto text-center pb-3 pt-3" >Enterprise</h1>
                <Card.Body >
                  <blockquote className="blockquote mb-0">
                  <Table>
					          <tr>
						          <p className="white text-center">Unlimited users</p>
                    </tr>
                    <td></td>
										<tr>
											<p className="white text-center">meeting scheduling</p>
										</tr>
                    <td></td>
										<tr>
											<p className="white text-center">pre meeting agenda</p>
										</tr>
                    <td></td>
										<tr>
											<p className="white text-center">post meeting feedback</p>
										</tr>
                  </Table>

									</blockquote>
									<blockquote className="blockquote mb-0">
									  <Row className = "center pt-3" style= {{color:'#FCAD55'}}>
              			  <Button variant="outline-light" className = "btn-rounded-2 w-50" href = "/signin">contact us</Button>
                    </Row>    
									</blockquote>
                </Card.Body>
              </Card>
						</Col>
        	</Row>

					<Row>
						<h1 className="title mx-auto" style = {{color:'#FCAD55'}}>Affected by Covid-19?</h1>
					</Row>
					<Row>
						<Col>
						<h2 className="paragraph-text mx-auto pt-2" style = {{color:'#837E7E'}}>
							Circal understands how Covid-19 has affected businesses. <a style = {{color: 'orange'}} href="/contact">Contact us</a> along<br></br>
							with a message of how your business was affected and how Circal can help.</h2>
						</Col>
					</Row>

          <Row>
						<h1 className="title mx-auto" style = {{color:'#FCAD55'}}>FAQs</h1>
					</Row>

					<Accordion className='faqs' style={{paddingTop:'5%'}}>
            <Card >
              <Accordion.Toggle as={Card.Header} eventKey="0" className='faqsTitle' onClick={this.accordionArrowOnChange1.bind(this)} >
                <span style = {{fontSize: '20px'}}>{this.state.arrow1} </span> How many teams can I create in the 'team' package?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  As many or as less as you want. But, only a max of 20 people can be signed up
                      with your organization. Ex. 4 teams of 5 or 2 teams of 10
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1" className='faqsTitle' onClick={this.accordionArrowOnChange2.bind(this)} value='00'>
              <span style = {{fontSize: '20px'}}>{this.state.arrow2} </span> What payment methods do you accept?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  Filler answer till we find payment gateway
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="2" className='faqsTitle' onClick={this.accordionArrowOnChange3.bind(this)} value='000'>
              <span style = {{fontSize: '20px'}}>{this.state.arrow3} </span> When does the trial end and what happens at the end of it?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  The Trial ends after 7 days of usage. After your trial is over, your features will be locked and you will have to choose a plan (listed above) to continue.
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="3" className='faqsTitle' onClick={this.accordionArrowOnChange4.bind(this)} value='0000'>
              <span style = {{fontSize: '20px'}}>{this.state.arrow4} </span> Will my data be private and safe?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
                  Security is of the upmost important to Circal! We keep your and your teams’ data secure.   
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="4" className='faqsTitle' onClick={this.accordionArrowOnChange5.bind(this)} value='00000'>
              <span style = {{fontSize: '20px'}}>{this.state.arrow5} </span> Can I cancel my account at any time?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="4">
                <Card.Body>
                  Yes you can cancel your account or payment plan at any time through the dashboard in account settings. 
                </Card.Body>
              </Accordion.Collapse>
            </Card>

          </Accordion>
					

		      <Container style = {{paddingTop:'4rem'}}>
            <GrayFooter/>
          </Container>
        </Container>
	    </Container>
  	</Container>
  	);
  }
}

export default Pricing;