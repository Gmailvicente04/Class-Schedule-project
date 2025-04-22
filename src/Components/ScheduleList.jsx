// src/components/ScheduleList.jsx
import React, { useState, useEffect } from 'react';
import ScheduleCard from './ScheduleCard';
import './ScheduleList.css';



export default function ScheduleList() {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    // Simulate fetching data from db.json
    setSchedules(schedulesData.schedules);
  }, []);

  return (
    <div className="schedule-list">
      {schedules.map(s => (
        <ScheduleCard key={s.id} info={s} />
      ))}
    </div>
  );
}
