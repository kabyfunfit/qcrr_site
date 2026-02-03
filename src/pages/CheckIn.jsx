import React, { useState } from 'react';

export default function CheckIn() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState('idle'); // idle, checking, needs_name, success, already_in
  const [feedbackName, setFeedbackName] = useState('');

  const handleCheckIn = async (e) => {
    e.preventDefault();
    setStatus('checking');

    // 1. Setup Variables
    const FUNCTION_ID = import.meta.env.VITE_FUNCTION_CHECKIN;
    const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
    const ENDPOINT = import.meta.env.VITE_APPWRITE_ENDPOINT;

    // 2. Prepare Data
    const payload = {
      body: JSON.stringify({ email, name }), 
      async: false
    };

    try {
      // 3. Send Request (Direct Fetch)
      const response = await fetch(`${ENDPOINT}/functions/${FUNCTION_ID}/executions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Appwrite-Project': PROJECT_ID
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) throw new Error('Server Error');

      const execution = await response.json();
      const data = JSON.parse(execution.responseBody);

      // 4. Handle Logic
      if (data.success) {
        setFeedbackName(data.name);
        setStatus(data.status === 'already_checked_in' ? 'already_in' : 'success');
      } else if (data.status === 'needs_name') {
        setStatus('needs_name'); // Triggers the Name Input to appear gently
      } else {
        alert('Error: ' + (data.error || 'Unknown error'));
        setStatus('idle');
      }

    } catch (err) {
      console.error(err);
      alert('System Error. Please try again.');
      setStatus('idle');
    }
  };

  // --- VIEW 1: SUCCESS (Green Screen) ---
  if (status === 'success') return (
    <div className="min-h-screen bg-brand-black flex flex-col items-center justify-center p-6 text-center animate-in fade-in zoom-in duration-500">
      <div className="bg-brand-dark border-2 border-green-500 rounded-2xl p-8 w-full max-w-sm shadow-[0_0_30px_rgba(34,197,94,0.3)]">
        <h1 className="text-6xl mb-4">✅</h1>
        <h2 className="text-2xl font-black text-white uppercase tracking-widest">You Are In.</h2>
        <p className="text-gray-400 mt-2 text-lg">Welcome, <span className="text-white font-bold">{feedbackName}</span>.</p>
        <p className="text-brand-gold font-bold mt-4 uppercase tracking-wider">See you on the court.</p>
        <button onClick={() => window.location.reload()} className="mt-8 text-xs text-gray-600 underline hover:text-white">Check in next player</button>
      </div>
    </div>
  );

  // --- VIEW 2: ALREADY CHECKED IN (Gray Screen) ---
  if (status === 'already_in') return (
    <div className="min-h-screen bg-brand-black flex flex-col items-center justify-center p-6 text-center animate-in fade-in duration-500">
      <div className="bg-brand-dark border-2 border-brand-gray rounded-2xl p-8 w-full max-w-sm">
        <h1 className="text-6xl mb-4">📋</h1>
        <h2 className="text-xl font-bold text-gray-300 uppercase tracking-widest">Already Checked In</h2>
        <p className="text-gray-500 mt-2">You are all set for today, {feedbackName}.</p>
        <button onClick={() => window.location.reload()} className="mt-8 text-xs text-gray-600 underline hover:text-white">Check in next player</button>
      </div>
    </div>
  );

  // --- VIEW 3: THE FORM ---
  return (
    <div className="min-h-screen bg-brand-black flex flex-col items-center justify-center p-6">
      <h1 className="text-brand-gold font-black italic text-3xl uppercase tracking-tighter mb-8">Court Check-In</h1>
      
      <div className="w-full max-w-sm bg-brand-dark border border-brand-gray rounded-xl p-6 shadow-xl">
        <form onSubmit={handleCheckIn} className="space-y-4">
          
          <div>
            <label className="block text-xs font-bold text-brand-gold mb-2 uppercase tracking-wider">Player Email</label>
            <input 
              type="email" 
              value={email} 
              onChange={e => setEmail(e.target.value)} 
              className="w-full bg-black border border-brand-gray focus:border-brand-gold rounded-lg p-4 text-white text-lg outline-none transition-all"
              placeholder="search@email.com" 
              required 
              disabled={status === 'needs_name'} // Lock email when asking for name
            />
          </div>

          {/* This input only appears if the email is new! */}
          {status === 'needs_name' && (
            <div className="animate-in fade-in slide-in-from-top-4 duration-500">
              <label className="block text-xs font-bold text-brand-gold mb-2 uppercase tracking-wider">
                Welcome! What name do you go by?
              </label>
              <input 
                type="text" 
                value={name} 
                onChange={e => setName(e.target.value)} 
                className="w-full bg-black border border-brand-gray focus:border-brand-gold rounded-lg p-4 text-white text-lg outline-none transition-all"
                placeholder="Full Name" 
                required 
                autoFocus
              />
            </div>
          )}

          <button 
            type="submit" 
            disabled={status === 'checking'}
            className="w-full bg-brand-gold text-black hover:bg-yellow-400 font-black py-4 rounded-lg text-lg uppercase tracking-wider transition-all"
          >
            {status === 'checking' ? 'Checking...' : 'Check In'}
          </button>

        </form>
      </div>
    </div>
  );
}