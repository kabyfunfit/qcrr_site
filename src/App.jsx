import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import RSVP from './pages/RSVP';
import CheckIn from './pages/CheckIn';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-black text-white font-sans">
      <Routes>
        {/* The RSVP Page (Home) */}
        <Route path="/" element={<RSVP />} />
        
        {/* The Check-In Page (New) */}
        <Route path="/checkin" element={<CheckIn />} /> 
        
        {/* Catch-all: Redirects random URLs back to Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}