import React, { useState } from 'react';
import { ID } from 'appwrite';
import { databases, CONSTANTS } from '../lib/appwrite';

// Helper for dates
const getNextDates = () => {
  const today = new Date();
  const nextDate = new Date(today);
  nextDate.setDate(today.getDate() + ((7 + 2 - today.getDay()) % 7 || 7)); // Next Tuesday
  return nextDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
};

export default function RSVP() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', can_reserve: false, is_member: false });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setLoading(true);

    try {
      await databases.createDocument(
        CONSTANTS.DB_ID,
        CONSTANTS.RSVP_COLLECTION_ID,
        ID.unique(),
        form
      );
      setStep(2);
    } catch (error) {
      if (error.code === 409) setStep(2); // Already exists? Show success anyway
      else alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  // --- SUB-COMPONENTS FOR CLEANER CODE ---
  const ContactBox = () => (
    <div className="mt-6 p-4 border border-brand-gray rounded-lg bg-brand-dark">
      <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">
        {form.can_reserve ? "COURT COORDINATION" : "NEED HELP?"}
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
          <p className="text-brand-gold text-sm font-bold mt-1">TARGET: TUESDAY, {getNextDates()} @ 8PM</p>
          <p className="text-xs text-gray-500 mt-1">FORMAT: KINGS COURT</p>
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
                <p className="font-bold text-white">The Picklr Tempe</p>
                <p className="text-xs text-gray-400">1315 W Elliot Rd, Tempe, AZ</p>
             </div>

             <label className="flex items-center space-x-3 cursor-pointer">
               <input 
                 type="checkbox" 
                 className="w-5 h-5 accent-brand-gold bg-brand-gray rounded"
                 checked={form.can_reserve}
                 onChange={e => setForm({...form, can_reserve: e.target.checked})}
               />
               <span className="text-sm text-gray-300">I can get a court</span>
             </label>

             <label className="flex items-center space-x-3 cursor-pointer">
               <input 
                 type="checkbox" 
                 className="w-5 h-5 accent-brand-gold bg-brand-gray rounded"
                 checked={form.is_member}
                 onChange={e => setForm({...form, is_member: e.target.checked})}
               />
               <span className="text-sm text-gray-300">I am a Picklr Member</span>
             </label>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-white text-black font-black py-4 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50"
          >
            {loading ? 'SENDING...' : 'CONFIRM RSVP'}
          </button>
        </form>
      </div>
    </div>
  );

  // --- VIEW 2: SUCCESS / ERROR ---
  return (
    <div className="min-h-screen bg-brand-black flex items-center justify-center p-4 text-center">
      <div className="w-full max-w-md">
        {form.is_member ? (
          <>
            <h1 className="text-3xl font-bold text-white uppercase tracking-widest mb-6">You Are In.</h1>
            <div className="bg-brand-dark border border-brand-gray rounded-xl p-6">
               <p className="text-lg text-gray-200 leading-relaxed">
                 See you at the <span className="font-bold text-white">Tempe Picklr</span><br/>
                 <span className="text-sm text-gray-500">1315 W Elliot Rd</span><br/>
                 <span className="font-bold text-brand-gold mt-2 block">Tuesday @ 8:00 PM</span>
               </p>
            </div>
            <ContactBox />
          </>
        ) : (
          <>
            <h1 className="text-2xl font-bold text-red-500 uppercase tracking-widest mb-4">Membership Required</h1>
            <div className="bg-red-900/20 border border-red-900 rounded-xl p-6 mb-6">
               <p className="text-red-200 text-sm">We saved your info, but you need a membership to play.</p>
               <a 
                 href="https://thepicklr.com/location/tempe/"
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