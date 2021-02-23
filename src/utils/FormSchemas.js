import * as Yup from 'yup';

// you can add regexs too... check the yup docs
export const createMeetingSchema = Yup.object().shape({
  meetingTitle: Yup.string().required('Meeting title required').max(50, 'Title cannot be more than 50 characters'),
  meetingDate: Yup.object({
    day: Yup.number().required(),
    month: Yup.number().required(),
    year: Yup.number().required()
  }).required('Meeting date is required'),
  meetingHours: Yup.string().required('Hours duration required'),
  meetingMinutes: Yup.string().required('Minutes duration required'),
  meetingAttendees: Yup.array().of(Yup.object().shape({
    name: Yup.string().required('Name of attendee required'),
    team: Yup.string().required('Team of attendee required')
  })).required().min(1, 'At least one attendee required'),
  meetingNotes: Yup.string().notRequired().max(500, 'Notes cannot be more than 500 characters')
});
