import React from 'react';
import schedules from '../data/schedules';
import ScheduleCard from './ScheduleCard';
import './ScheduleList.css';

export default function ScheduleList() {
  return (
    <div className="schedule-list">
      {schedules.map((s) => (
        <ScheduleCard key={s.id} info={s} />
      ))}
    </div>
  );
}
