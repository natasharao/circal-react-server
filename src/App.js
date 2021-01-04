import React from 'react';
import './App.css';
import { Container, Row, Col, CardGroup, Card} from 'react-bootstrap';
import {Contact} from './components/Contact.js';
import {Home} from './components/Home.js';
import {About} from './components/About.js';
import {Pricing} from './components/Pricing.js';
import {Features} from './components/Features.js';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import {Password} from './components/Password.js';
import SignIn from './components/SignIn.js';
import UserDashboard from './components/User/Home/UserDashboard.js';
import SignUpNext from './components/SignUpFlow/SignUpNext';
import TeamDashboard from './components/User/Team/TeamDashboard.js'
import AgendaDashboard from './components/User/Agenda/AgendaDashboard';
import PrivacyPolicy from './components/PrivacyPolicy';
import CreateMeetingForm from './components/User/CreateMeetingForm';
import CalendarDashboard from './components/User/Calendar/CalendarDashboard';


const HeroImageContainer = {
  position: 'absolute',
  top:0,
  left:0,
  zIndex:0,
  width:'100%'
};

const SectionBackground = {
  position: 'absolute',
  left:-15,
  right: 0,
  zIndex:0,
  width:'100%'
};

const OtherStyle = {
  position: 'absolute',
  zIndex:2,
  width:'100%'
};

class App extends React.Component {
  render() {
    return (
  <BrowserRouter>
    <Container fluid>  
          <Switch>
            <Route path ='/' component= {Home} exact/>
            <Route path = '/features' component = {Features}/>
            <Route path = '/pricing' component = {Pricing}/>
            <Route path = '/about' component = {About}/>
            <Route path = '/contact' component = {Contact}/>
            <Route path = '/password' component = {Password}/>
            <Route path = '/signin' component = {SignIn}/>
            <Route path = '/signup' component = {SignUpNext}/>
            <Route path = '/user_dashboard' component = {UserDashboard}/>
            <Route path = '/create_meeting' component = {CreateMeetingForm}/>
            <Route path = '/my_team' component = {TeamDashboard}/>
            <Route path = '/my_agendas' component = {AgendaDashboard}/>
            <Route path = "/my_calendar" component = {CalendarDashboard}/>
            <Route path = '/my_account'/>
            <Route path = '/privacy_policy' component = {PrivacyPolicy}/>
          </Switch>
    </Container>
  </BrowserRouter>

    );
  }
}

export default App;