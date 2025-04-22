import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ScheduleList from './Components/ScheduleList.jsx';

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <h1 className="title">My Class Schedule</h1>
        <ScheduleList />
      </main>
    </div>
  );
}
