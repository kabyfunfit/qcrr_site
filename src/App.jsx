import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import RSVP from './pages/RSVP';
import Checkin from './pages/CheckIn';
import Roster from './pages/Roster';
import PitchDeck from './pages/PitchDeck';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-black text-white font-sans">
      <main>
        <Routes>
          {/* The Home page is now RSVP again */}
          <Route path="/" element={<RSVP />} />

          {/* The Check-In Page */}
          <Route path="/checkin" element={<Checkin />} />

          {/* The Player Info page is moved to its own URL */}
          <Route path="/roster" element={<Roster />} />

          {/* The Professional Pitch Deck / Partner Page */}
          <Route path="/pitch" element={<PitchDeck />} />

          {/* Catch-all: Redirects random URLs back to Home (RSVP) */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}