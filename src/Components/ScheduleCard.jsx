import React from 'react';
import './ScheduleCard.css';

export default function ScheduleCard({ info }) {
  const { course, instructor, days, time, location } = info;
  return (
    <div className="schedule-card">
      <h3>{course}</h3>
      <p><strong>Instructor:</strong> {instructor}</p>
      <p><strong>Days:</strong> {days}</p>
      <p><strong>Time:</strong> {time}</p>
      <p><strong>Location:</strong> {location}</p>
    </div>
  );
}
