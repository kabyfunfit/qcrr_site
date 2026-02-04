import React, { useState } from 'react';
import { ID, Query } from 'appwrite';
import { databases } from '../lib/appwrite';

// --- CONFIGURATION ---
const DB_ID = '697e7098000a1a51bb73';
const COLLECTION_ID = 'rsvp';

// --- DATE HELPERS ---

// 1. For Display (e.g. "Feb 7")
const getDisplayDate = () => {
  const today = new Date();
  const nextDate = new Date(today);
  nextDate.setDate(today.getDate() + ((7 + 6 - today.getDay()) % 7 || 7)); // Next Saturday
  return nextDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
};

// 2. For Database (e.g. "2026-02-07")
const getSaturdayISO = () => {
  const today = new Date();
  const nextDate = new Date(today);
  nextDate.setDate(today.getDate() + ((7 + 6 - today.getDay()) % 7 || 7));
  return nextDate.toISOString().split('T')[0];
};

export default function RSVP() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', is_member: false });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setLoading(true);

    const targetDate = getSaturdayISO();

    try {
      // 1. Check if they exist
      const check = await databases.listDocuments(
        DB_ID,
        COLLECTION_ID,
        [Query.equal('email', form.email)]
      );

      if (check.total > 0) {
        // --- RETURNING PLAYER ---
        const doc = check.documents[0];
        // CHANGED: Look at 'rsvp' instead of 'attendance_log'
        const currentRsvps = doc.rsvp || []; 

        if (!currentRsvps.includes(targetDate)) {
          const newRsvps = [...currentRsvps, targetDate];
          await databases.updateDocument(
            DB_ID,
            COLLECTION_ID,
            doc.$id,
            {
              rsvp: newRsvps, // CHANGED: Update 'rsvp' attribute
              is_member: form.is_member
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
            rsvp: [targetDate], // CHANGED: Initialize 'rsvp' attribute
            attendance_log: [], // Keep attendance empty for now
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

  // --- SUB-COMPONENTS ---
  const ContactBox = () => (
    <div className="mt-6 p-4 border border-brand-gray rounded-lg bg-brand-dark">
      <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">
        NEED HELP?
      </p>
      <p className="text-sm text-white">
        Questions? Text Sean @ <a href="sms:4803221517" className="underline">480.322.1517</a>
      </p>
    </div>
  );

  // --- VIEW 1: THE FORM ---
  if (step === 1) return (
    <div className="min-h-screen bg-brand-black flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        
        {/* HEADER CARD */}
        <div className="bg-brand-dark border border-brand-gray rounded-lg p-5 mb-4">
          <h1 className="text-lg font-black text-white uppercase tracking-wider">Road Runner RSVP</h1>
          <p className="text-brand-gold text-sm font-bold mt-1">TARGET: SATURDAY, {getDisplayDate()} @ 7-9 PM</p>
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
                <p className="text-xs text-gray-400">11333 E Southern Ave, Mesa, AZ</p>
             </div>

             <label className="flex items-center space-x-3 cursor-pointer">
               <input 
                 type="checkbox" 
                 className="w-5 h-5 accent-brand-gold bg-brand-gray rounded"
                 checked={form.is_member}
                 onChange={e => setForm({...form, is_member: e.target.checked})}
               />
               <span className="text-sm text-gray-300">I am a Picklr / Trial Member</span>
             </label>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-white text-black font-black py-4 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50 flex items-center justify-center min-h-[56px]"
          >
            {loading ? (
              <div className="flex items-center space-x-2">
                <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>LOCKING IT IN...</span>
              </div>
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
          <>
            <h1 className="text-3xl font-bold text-white uppercase tracking-widest mb-6">You Are In.</h1>
            <div className="bg-brand-dark border border-brand-gray rounded-xl p-6">
               <p className="text-lg text-gray-200 leading-relaxed">
                 See you at the <span className="font-bold text-white">Mesa Picklr</span><br/>
                 <span className="text-sm text-gray-500">11333 E Southern Ave</span><br/>
                 <span className="font-bold text-brand-gold mt-2 block">Saturday @ 7:00 - 9:00 PM</span>
               </p>
            </div>
            <ContactBox />
          </>
        ) : (
          <>
            <h1 className="text-2xl font-bold text-red-500 uppercase tracking-widest mb-4">Membership Required</h1>
            <div className="bg-red-900/20 border border-red-900 rounded-xl p-6 mb-6">
               <p className="text-red-200 text-sm">We saved your spot, but you need a membership to play.</p>
               <a 
                 href="https://thepicklr.com/location/mesa/"
                 target="_blank"
                 className="block mt-4 bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-500"
               >
                 Get Trial ($30)
               </a>
            </div>
            <ContactBox />
          </>
        )}
      </div>
    </div>
  );
}