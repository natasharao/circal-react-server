import React, { useEffect, useState } from 'react';
import { Container, Card, Form, Row, Col, Button, FormControl } from 'react-bootstrap';
import Multiselect from 'react-widgets/lib/Multiselect';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ErrorMessage } from '@hookform/error-message';

import { createMeetingSchema } from '../../utils/FormSchemas';
import CalendarPicker from './CalendarPicker.js';

const CreateMeetingForm = () => {
  const people = [
    { team: 'circal-dev', name: 'Natasha Rao' },
    { team: 'circal-dev', name: 'Miranda Chai' },
    { team: 'circal-dev', name: 'Aarushi Upadhayaya' },
    { team: 'circal-dev', name: 'Ibrahim Saeed' },
    { team: 'circal-biz', name: 'Sachi Tolani' },
    { team: 'circal-biz', name: 'Anisha Bhat' }
  ];

  const todayDate = new Date();
  const { register, handleSubmit, control, errors } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    resolver: yupResolver(createMeetingSchema),
    defaultValues: {
      meetingTitle: '',
      meetingDate: { day: todayDate.getDate(), month: todayDate.getMonth(), year: todayDate.getFullYear() },
      meetingHours: '',
      meetingMins: '',
      meetingAttendees: [],
      meetingNotes: ''
    }
  });
  const onSubmit = data => {
    console.log('Submit: ');
    console.log(data);
  };
  const onError = formErrors => {
    console.log('Errors: ');
    console.log(formErrors);
  };

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
          noValidate
          variant='secondary'
          className='font w-100 h-100 mt-5'
          onSubmit={handleSubmit(onSubmit, onError)}
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
                <Form.Label>Meeting Title*</Form.Label>
                <Form.Control
                  name='meetingTitle'
                  ref={register}
                  type='text'
                  className='w-50'
                  isInvalid={errors && errors.meetingTitle}
                />
                <Form.Control.Feedback type='invalid'>
                  <ErrorMessage errors={errors} name='meetingTitle' />
                </Form.Control.Feedback>

              </Form.Group>
              <Form.Group>
                <Form.Label>Duration of Meeting*</Form.Label>
                <Form.Group>
                  <Form.Row>
                    <Col lg={3}>
                      <Form.Row>
                        <Form.Control
                          name='meetingHours'
                          ref={register}
                          className='w-50 mr-2'
                          isInvalid={errors && errors.meetingHours}
                        />
                        <p className='my-auto'>Hours</p>
                        <Form.Control.Feedback type='invalid'>
                          <ErrorMessage errors={errors} name='meetingHours' />
                        </Form.Control.Feedback>
                      </Form.Row>
                    </Col>
                    <Col lg={3}>
                      <Form.Row>

                        <Form.Control
                          name='meetingMinutes'
                          ref={register}
                          className='w-50 mr-2'
                          isInvalid={errors && errors.meetingMinutes}
                        />
                        <p className='my-auto'>Minutes</p>
                        <Form.Control.Feedback type='invalid'>
                          <ErrorMessage errors={errors} name='meetingMinutes' />
                        </Form.Control.Feedback>

                      </Form.Row>
                    </Col>
                  </Form.Row>
                </Form.Group>
              </Form.Group>
              <Form.Group>
                <Form.Label>Choose Attendees*</Form.Label>

                <Controller
                  name='meetingAttendees'
                  control={control}
                  rules={{ required: true }}
                  render={({ value, onChange, onBlur }) => (
                    <Multiselect
                      className='w-50'
                      value={value}
                      onChange={onChange}
                      onBlur={onBlur}
                      textField='name'
                      groupBy='team'
                      data={people}
                    />
                  )}
                />
                <FormControl hidden name='meetingAttendees' isInvalid={errors && errors.meetingAttendees} />
                <Form.Control.Feedback type='invalid'>
                  <ErrorMessage errors={errors} name='meetingAttendees' />
                </Form.Control.Feedback>

              </Form.Group>
              <Form.Group>
                <Form.Label>Meeting Notes</Form.Label>

                <Form.Control
                  name='meetingNotes'
                  ref={register}
                  as='textarea'
                  rows='3'
                  className='w-50'
                  isInvalid={errors && errors.meetingNotes}
                />
                <Form.Control.Feedback type='invalid'>
                  <ErrorMessage errors={errors} name='meetingNotes' />
                </Form.Control.Feedback>
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
