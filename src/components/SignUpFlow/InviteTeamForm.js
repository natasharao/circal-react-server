import React from 'react';
import {Form, Row} from 'react-bootstrap';

export class InviteTeamForm extends React.Component {
    state = {
        value: '',
        name: '',
        emails: [],
        error: null
    }

    handleChange = (evt) => {
        this.setState({
            value: evt.target.value,
            error: null
        });
    };

    handleDelete = (toBeRemoved) => {
        this.setState({
          emails: this.state.emails.filter(email => email !== toBeRemoved)
        });
    };

    isValid = (email) => {
        let error = null;
        if (this.state.emails.includes(email)) {
            error = `${email} has already been invited`;
        }
        if (!(/[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/.test(email))) {
            error = `${email} is not a valid email address.`
        }

        if (error) {
            this.setState({ error });
            return false;
        }

        return true;
    }

    handleKeyDown = (evt) => {
        if (['Enter', 'Tab', ','].includes(evt.key)) {
            evt.preventDefault();
            
            var value = this.state.value.trim();
              
            if (value && this.isValid(value)) {
              this.setState({
                emails: [...this.state.emails, this.state.value],
                value: ""
              });
            }
            
        }
    }
    render() {
        return(
            <Form.Group className = "mx-auto w-75">
            <Form.Label>Invite Teammates</Form.Label>
            <>
                <Form.Control 
                placeholder = "Type in email addresses"  
                value={this.state.value}
                onKeyDown={this.handleKeyDown}
                onChange={this.handleChange} 
                type = "email">
                </Form.Control>
                {this.state.error && <p className="text-warning">{this.state.error}</p>}
                <Row className = "pt-2">
                {this.state.emails.map(email => (
                        <div className="tag-item" key={email}>
                            {email}
                            <button
                            type="button"
                            className="button"
                            onClick={() =>  this.handleDelete(email)}
                            >
                            &times;
                            </button>
                        </div>
                ))}
                </Row>
            </>
        </Form.Group>
        );
    }
}

export default InviteTeamForm;