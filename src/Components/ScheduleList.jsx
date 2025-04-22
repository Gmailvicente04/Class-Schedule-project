// src/components/ScheduleList.jsx
import React, { useState, useEffect } from 'react';
import ScheduleCard from './ScheduleCard';
import './ScheduleList.css';

export default function ScheduleList() {
  const [schedules, setSchedules] = useState([]);
  const API = 'https://my-json-server.typicode.com/<Gmailvicente04>/Class-Schedule-Project/schedules';

  useEffect(() => {
    fetch(API)
      .then(res => {
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
      })
      .then(data => setSchedules(data))
      .catch(err => console.error('Failed to load schedules:', err));
  }, []);

  return (
    <div className="schedule-list">
      {schedules.map(s => (
        <ScheduleCard key={s.id} info={s} />
      ))}
    </div>
  );
}
