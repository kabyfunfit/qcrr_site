import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import RSVP from './pages/RSVP';
import Checkin from './pages/CheckIn';
import Roster from './pages/Roster';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-black text-white font-sans">
      <main>
        <Routes>
          {/* Default to the Roster page */}
          <Route path="/" element={<Roster />} />

          {/* Other routes remains accessible via direct URL */}
          <Route path="/rsvp" element={<RSVP />} />
          <Route path="/checkin" element={<Checkin />} />

          {/* Catch-all: Redirects random URLs back to Roster */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}