"use client"
import { EventInput } from '@fullcalendar/core';
// import MyCalendar from '../../components/calender';
import { useState } from 'react';

const CalendarPage: React.FC = () => {
  const [events, setEvents] = useState<EventInput[]>([
    {
      title: 'Custom Event 1',
      start: '2023-09-10',
    },
    {
      title: 'Custom Event 2',
      start: '2023-09-15',
    },
    // Add more custom events as needed
  ]);

  const addEvent = () => {
    const newEvent: EventInput = {
      title: 'New Custom Event',
      start: '2023-09-20',
    };

    setEvents((prevEvents) => [...prevEvents, newEvent]);
  };

  return (
    <div>
      <h1>Custom Calendar</h1>
      <button onClick={addEvent}>Add Event</button>
      {/* <MyCalendar events={events} /> */}
    </div>
  );
};

export default CalendarPage;
