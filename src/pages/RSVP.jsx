import React, { useState } from 'react';
import { ID, Query } from 'appwrite';
import { databases } from '../lib/appwrite';

// --- CONFIGURATION ---
const DB_ID = '697e7098000a1a51bb73';
const COLLECTION_ID = 'rsvp';

// --- DATE HELPERS ---

const getNextTuesday = () => {
  const today = new Date();
  const nextDate = new Date(today);
  
  // Calculate days until Tuesday (2)
  // If today is Monday (1), result is 1 (Target: Tomorrow)
  // If today is Tuesday (2), result is 0 (Target: Today)
  const daysUntilTuesday = (2 - today.getDay() + 7) % 7;
  
  nextDate.setDate(today.getDate() + daysUntilTuesday);
  return nextDate;
};

// 1. For Display (e.g. "Feb 10")
const getDisplayDate = () => {
  return getNextTuesday().toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
};

// 2. For Database (e.g. "2026-02-10")
const getTargetISO = () => {
  return getNextTuesday().toISOString().split('T')[0];
};

// --- SUB-COMPONENTS ---

const ContactBox = () => (
  <div className="mt-6 p-4 border border-brand-gray rounded-lg bg-brand-dark">
    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">
      NEED HELP?
    </p>
    <p className="text-sm text-white">
      Questions? Text Sean @ <a href="sms:4803221517" className="underline hover:text-brand-gold">480.322.1517</a>
    </p>
  </div>
);

const LoadingSpinner = () => (
  <svg className="animate-spin h-5 w-5 text-black mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
);

export default function RSVP() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', is_member: false });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setLoading(true);

    const targetDate = getTargetISO();

    try {
      // 1. Check if user exists
      const check = await databases.listDocuments(
        DB_ID,
        COLLECTION_ID,
        [Query.equal('email', form.email)]
      );

      if (check.total > 0) {
        // --- RETURNING PLAYER ---
        const doc = check.documents[0];
        const currentRsvps = doc.rsvp || []; 

        if (!currentRsvps.includes(targetDate)) {
          const newRsvps = [...currentRsvps, targetDate];
          await databases.updateDocument(
            DB_ID,
            COLLECTION_ID,
            doc.$id,
            {
              rsvp: newRsvps, 
              is_member: form.is_member,
              name: form.name
            }
          );
        }
      } else {
        // --- NEW PLAYER ---
        await databases.createDocument(
          DB_ID,
          COLLECTION_ID,
          ID.unique(),
          {
            name: form.name,
            email: form.email,
            rsvp: [targetDate],
            attendance_log: [],
            can_reserve: false,
            is_member: form.is_member
          }
        );
      }
      setStep(2);
    } catch (error) {
      console.error("RSVP Error:", error);
      alert(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  // --- VIEW 1: THE FORM ---
  if (step === 1) return (
    <div className="min-h-screen bg-brand-black flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        
        {/* HEADER CARD */}
        <div className="bg-brand-dark border border-brand-gray rounded-lg p-5 mb-4">
          <h1 className="text-lg font-black text-white uppercase tracking-wider">Road Runner RSVP</h1>
          <p className="text-brand-gold text-sm font-bold mt-1">TARGET: TUESDAY, {getDisplayDate()} @ 8-10 PM</p>
          <p className="text-xs text-gray-500 mt-1">FORMAT: ELIMINATION</p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-gray-500 mb-1">NAME</label>
            <input 
              type="text" 
              placeholder="e.g. The Hammer"
              className="w-full bg-brand-gray border border-transparent focus:border-brand-gold rounded-lg p-3 text-white outline-none transition-colors"
              value={form.name}
              onChange={e => setForm({...form, name: e.target.value})}
              required
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-500 mb-1">EMAIL</label>
            <input 
              type="email" 
              placeholder="email@address.com"
              className="w-full bg-brand-gray border border-transparent focus:border-brand-gold rounded-lg p-3 text-white outline-none transition-colors"
              value={form.email}
              onChange={e => setForm({...form, email: e.target.value})}
              required
            />
          </div>

          <div className="bg-brand-dark border border-brand-gray rounded-lg p-4 space-y-4">
             <div className="border-b border-brand-gray pb-3">
                <p className="text-xs text-gray-500 font-bold mb-1">LOCATION</p>
                <p className="font-bold text-white">The Picklr Mesa</p>
                <p className="text-xs text-gray-400">1135 N. Recker Rd, Mesa, AZ 85205</p>
             </div>

             <label className="flex items-center space-x-3 cursor-pointer group">
               <input 
                 type="checkbox" 
                 className="w-5 h-5 accent-brand-gold bg-brand-gray rounded cursor-pointer"
                 checked={form.is_member}
                 onChange={e => setForm({...form, is_member: e.target.checked})}
               />
               <span className="text-sm text-gray-300 group-hover:text-white transition-colors">I am a Picklr / Trial Member</span>
             </label>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-white text-black font-black py-4 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50 flex items-center justify-center min-h-[56px]"
          >
            {loading ? (
              <>
                <LoadingSpinner />
                <span>LOCKING IT IN...</span>
              </>
            ) : (
              'CONFIRM RSVP'
            )}
          </button>
        </form>
      </div>
    </div>
  );

  // --- VIEW 2: SUCCESS ---
  return (
    <div className="min-h-screen bg-brand-black flex items-center justify-center p-4 text-center">
      <div className="w-full max-w-md">
        {form.is_member ? (
          <div className="animate-fade-in">
            <h1 className="text-3xl font-bold text-white uppercase tracking-widest mb-6">You Are In.</h1>
            <div className="bg-brand-dark border border-brand-gray rounded-xl p-6 shadow-2xl">
               <p className="text-lg text-gray-200 leading-relaxed">
                 See you at the <span className="font-bold text-white">Mesa Picklr</span><br/>
                 <span className="text-sm text-gray-500">1135 N. Recker Rd</span><br/>
                 <span className="font-bold text-brand-gold mt-2 block">Tuesday @ 8:00 - 10:00 PM</span>
               </p>
            </div>
            <ContactBox />
          </div>
        ) : (
          <div className="animate-fade-in">
            <h1 className="text-2xl font-bold text-red-500 uppercase tracking-widest mb-4">Membership Required</h1>
            <div className="bg-red-900/20 border border-red-900 rounded-xl p-6 mb-6">
               <p className="text-red-200 text-sm">We saved your spot, but you need a membership to play.</p>
               <a 
                 href="https://thepicklr.com/location/mesa/"
                 target="_blank"
                 rel="noreferrer"
                 className="block mt-4 bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-500 transition-colors"
               >
                 Get Trial ($30)
               </a>
            </div>
            <ContactBox />
          </div>
        )}
      </div>
    </div>
  );
}