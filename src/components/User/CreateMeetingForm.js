import React, { useEffect, useState } from 'react';
import { Container, Card, Form, Row, Col, Button } from 'react-bootstrap';
import CalendarPicker from './CalendarPicker.js';
import Multiselect from 'react-widgets/lib/Multiselect';
import { useForm, Controller } from 'react-hook-form';

const CreateMeetingForm = () => {
  const people = [
    { team: 'circal-dev', name: 'Natasha Rao' },
    { team: 'circal-dev', name: 'Miranda Chai' },
    { team: 'circal-dev', name: 'Aarushi Upadhayaya' },
    { team: 'circal-biz', name: 'Sachi Tolani' },
    { team: 'circal-biz', name: 'Anisha Bhat' }
  ];

  const { register, handleSubmit, control, errors } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: {
      meetingTitle: '',
      meetingDate: '',
      meetingHours: '',
      meetingMins: '',
      meetingAttendes: [],
      meetingNotes: ''
    }
  });
  const onSubmit = data => console.log(data);

  function filterLastName (person, value) {
    const lastname = person.lastName.toLowerCase();
    const search = value.toLowerCase();

    return lastname.indexOf(search) === 0;
  }

  return (
    <Container className='animate__animated animate__slideInDown min-vw-100 min-vh-100' fluid>
      <Row className='w-100 h-25 mt-2'>
        <Col className='float-left'>
          <Button
            className='text-secondary'
            variant='link'
            href='/user_dashboard'
          >
            Cancel
          </Button>
        </Col>
      </Row>
      <Row className='w-100 h-75'>
        <Form
          variant='secondary'
          className='font w-100 h-100 mt-5'
          onSubmit={handleSubmit(onSubmit)}
        >
          <Form.Row lg={12}>
            <Col lg={4} className='w-25 pl-5'>
              <Row className='mt-5'>
                <h6 className='mx-auto'>Choose a day</h6>
              </Row>
              <Row className='center'>

                <Controller
                  name='meetingDate'
                  control={control}
                  rules={{ required: true }}
                  render={({ value, onChange, onBlur }) => (
                    <CalendarPicker
                      value={value}
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                  )}
                />

                <h1 />
              </Row>
            </Col>
            <Col lg={8} className='w-75 pl-0 ml-0 pl-sm-5 pt-sm-5'>
              <Form.Group>
                <Form.Label>Meeting Title</Form.Label>
                <Form.Control name='meetingTitle' ref={register} type='text' className='w-50' />
              </Form.Group>
              <Form.Group>
                <Form.Label>Duration of Meeting</Form.Label>
                <Form.Group>
                  <Form.Row>
                    <Col lg={3}>
                      <Form.Row>
                        <Form.Control name='meetingHours' ref={register} className='w-50 mr-2' pattern='[0-9]*' />
                        <p className='my-auto'>Hours</p>
                      </Form.Row>
                    </Col>
                    <Col lg={3}>
                      <Form.Row>
                        <Form.Control name='meetingMinutes' ref={register} className='w-50 mr-2' pattern='[0-9]*' />
                        <p className='my-auto'>Minutes</p>
                      </Form.Row>
                    </Col>
                  </Form.Row>
                </Form.Group>
              </Form.Group>
              <Form.Group>
                <Form.Label>Choose Attendees</Form.Label>
                <Controller
                  name='meetingAttendes'
                  control={control}
                  rules={{ required: true }}
                  render={({ value, onChange, onBlur }) => (
                    <Multiselect
                      className='w-50'
                      data={people}
                      textField='name'
                      groupBy='team'
                      onChange={onChange}
                      value={value}
                    />
                  )}
                />

              </Form.Group>
              <Form.Group>
                <Form.Label>Agenda Notes</Form.Label>
                <Form.Control name='agendaNotes' ref={register} as='textarea' rows='3' className='w-50' />
              </Form.Group>
              <Form.Row className='w-25 pt-4'>
                <Button type='submit' variant='secondary' className='btn-rounded w-100'>
                  Sync!
                </Button>
              </Form.Row>
            </Col>
          </Form.Row>
        </Form>
      </Row>
    </Container>
  );
};

export default CreateMeetingForm;
