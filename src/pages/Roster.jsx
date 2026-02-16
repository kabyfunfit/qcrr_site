import React, { useState, useMemo } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { databases, CONSTANTS } from '../lib/appwrite';
import { ID } from 'appwrite';

const Roster = () => {
  const queryClient = useQueryClient();
  
  // Form State
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    duprId: '',
    shirtSize: '',
    bottomSize: '',
    practiceDay: '',
    commPreference: '',
    scrimmageFeb28: false
  });

  const [selectedLocations, setSelectedLocations] = useState([]);
  const [newLocation, setNewLocation] = useState('');

  // 1. Fetch existing roster to calculate location votes
  const { data: rosterData } = useQuery({
    queryKey: ['roster'],
    queryFn: () => databases.listDocuments(CONSTANTS.DB_ID, CONSTANTS.ROSTER_COLLECTION_ID)
  });

  // 2. Calculate vote counts from existing player documents
  const voteCounts = useMemo(() => {
    const counts = {};
    rosterData?.documents.forEach(doc => {
      if (doc.locations && Array.isArray(doc.locations)) {
        doc.locations.forEach(loc => {
          counts[loc] = (counts[loc] || 0) + 1;
        });
      }
    });
    return Object.entries(counts).sort((a, b) => b[1] - a[1]);
  }, [rosterData]);

  // 3. Handle location selection (Limit to 2 total)
  const toggleLocation = (loc) => {
    if (selectedLocations.includes(loc)) {
      setSelectedLocations(prev => prev.filter(l => l !== loc));
    } else if (selectedLocations.length < 2) {
      setSelectedLocations(prev => [...prev, loc]);
    }
  };

  const handleAddCustomLocation = (e) => {
    e.preventDefault();
    const trimmed = newLocation.trim();
    if (trimmed && !selectedLocations.includes(trimmed) && selectedLocations.length < 2) {
      setSelectedLocations(prev => [...prev, trimmed]);
      setNewLocation('');
    }
  };

  // 4. Submit logic to Appwrite
  const mutation = useMutation({
    mutationFn: (newMember) => databases.createDocument(
      CONSTANTS.DB_ID, 
      CONSTANTS.ROSTER_COLLECTION_ID, 
      ID.unique(), 
      newMember
    ),
    onSuccess: () => {
      queryClient.invalidateQueries(['roster']);
      alert('Your information has been successfully submitted.');
      setFormData({
        firstName: '', lastName: '', email: '', phone: '', duprId: '',
        shirtSize: '', bottomSize: '', practiceDay: '', commPreference: '',
        scrimmageFeb28: false
      });
      setSelectedLocations([]);
    },
    onError: (error) => {
      console.error(error);
      alert('Error: Submission failed. Check the console for details.');
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ 
      ...formData, 
      locations: selectedLocations 
    });
  };

  return (
    <div className="w-full max-w-2xl mx-auto my-4 md:my-10 p-4 md:p-8 bg-slate-900 text-white rounded-xl shadow-2xl border border-slate-800">
      <header className="mb-6 md:mb-8 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-black tracking-tight text-orange-500 uppercase leading-none">Player Information</h1>
        <p className="text-slate-400 mt-2 text-sm italic">Confirmed Road Runners Players Only</p>
      </header>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Section 1: Identity */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input 
              type="text" placeholder="First Name" required 
              className="bg-slate-800 border border-slate-700 p-3 rounded-lg outline-none focus:border-orange-500 w-full" 
              value={formData.firstName}
              onChange={e => setFormData({...formData, firstName: e.target.value})} 
            />
            <input 
              type="text" placeholder="Last Name" required 
              className="bg-slate-800 border border-slate-700 p-3 rounded-lg outline-none focus:border-orange-500 w-full" 
              value={formData.lastName}
              onChange={e => setFormData({...formData, lastName: e.target.value})} 
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input 
              type="email" placeholder="Email Address" required 
              className="bg-slate-800 border border-slate-700 p-3 rounded-lg outline-none focus:border-orange-500 w-full" 
              value={formData.email}
              onChange={e => setFormData({...formData, email: e.target.value})} 
            />
            <input 
              type="tel" placeholder="Phone Number" required 
              className="bg-slate-800 border border-slate-700 p-3 rounded-lg outline-none focus:border-orange-500 w-full" 
              value={formData.phone}
              onChange={e => setFormData({...formData, phone: e.target.value})} 
            />
          </div>
          <input 
            type="text" placeholder="DUPR ID" required 
            className="w-full bg-slate-800 border border-slate-700 p-3 rounded-lg outline-none focus:border-orange-500" 
            value={formData.duprId}
            onChange={e => setFormData({...formData, duprId: e.target.value})} 
          />
        </div>

        {/* Section 2: Apparel */}
        <div className="grid grid-cols-2 gap-4">
          <select 
            required className="bg-slate-800 border border-slate-700 p-3 rounded-lg outline-none focus:border-orange-500 w-full appearance-none"
            value={formData.shirtSize}
            onChange={e => setFormData({...formData, shirtSize: e.target.value})}
          >
            <option value="">Shirt Size</option>
            {['S', 'M', 'L', 'XL', 'XXL'].map(s => <option key={s} value={s}>{s}</option>)}
          </select>
          <select 
            required className="bg-slate-800 border border-slate-700 p-3 rounded-lg outline-none focus:border-orange-500 w-full appearance-none"
            value={formData.bottomSize}
            onChange={e => setFormData({...formData, bottomSize: e.target.value})}
          >
            <option value="">Short/Skirt Size</option>
            {['S', 'M', 'L', 'XL', 'XXL'].map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>

        {/* Section 3: Practice Locations */}
        <div className="space-y-3">
          <label className="text-sm font-bold text-orange-500 uppercase tracking-wider">Practice Location Selection</label>
          <div className="bg-slate-950 p-4 md:p-5 rounded-lg border border-slate-800">
            <p className="text-[11px] md:text-xs text-slate-400 mb-4 leading-relaxed">
              If no alternatives are suggested or available, we will default to **AAG**. Pick or suggest up to 2:
            </p>

            {voteCounts.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {voteCounts.map(([loc, count]) => (
                  <button 
                    key={loc} type="button"
                    onClick={() => toggleLocation(loc)}
                    className={`px-3 py-1.5 rounded-full text-[10px] md:text-xs font-bold border transition-all ${
                      selectedLocations.includes(loc) 
                      ? 'bg-orange-600 border-orange-400 text-white' 
                      : 'bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-500'
                    }`}
                  >
                    {loc} ({count})
                  </button>
                ))}
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="text" value={newLocation} placeholder="New location name..." 
                className="flex-1 bg-slate-800 border border-slate-700 p-2 rounded-lg text-sm outline-none focus:border-orange-500"
                onChange={e => setNewLocation(e.target.value)}
              />
              <button 
                type="button" 
                onClick={handleAddCustomLocation}
                disabled={selectedLocations.length >= 2 || !newLocation.trim()}
                className="bg-blue-700 px-4 py-2 rounded-lg text-xs font-black uppercase hover:bg-blue-600 disabled:opacity-30 transition-opacity whitespace-nowrap"
              >
                Add Option
              </button>
            </div>
            
            <div className="mt-4 flex flex-wrap justify-between items-center border-t border-slate-800 pt-3 gap-2">
              <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">
                Picks: {selectedLocations.length} / 2
              </span>
              <div className="flex flex-wrap gap-1">
                {selectedLocations.map(loc => (
                  <span key={loc} className="bg-slate-800 text-[9px] md:text-[10px] px-2 py-0.5 rounded border border-slate-700">
                    {loc}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Logistics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <select 
            required className="bg-slate-800 border border-slate-700 p-3 rounded-lg outline-none focus:border-orange-500 w-full appearance-none"
            value={formData.practiceDay}
            onChange={e => setFormData({...formData, practiceDay: e.target.value})}
          >
            <option value="">Best Weekday</option>
            {/* These options must match the Appwrite Enum exactly: Mon, Wed, Fri, Thu, Tue */}
            <option value="Mon">Monday</option>
            <option value="Tue">Tuesday</option>
            <option value="Wed">Wednesday</option>
            <option value="Thu">Thursday</option>
            <option value="Fri">Friday</option>
          </select>
          <select 
            required className="bg-slate-800 border border-slate-700 p-3 rounded-lg outline-none focus:border-orange-500 w-full appearance-none"
            value={formData.commPreference}
            onChange={e => setFormData({...formData, commPreference: e.target.value})}
          >
            <option value="">Group Messenger</option>
            <option value="WhatsApp">WhatsApp</option>
            <option value="GroupMe">GroupMe</option>
            <option value="Text">Text</option>
          </select>
        </div>

        <div className="p-4 bg-slate-800/40 rounded-lg border border-slate-700">
          <label className="flex items-center gap-3 cursor-pointer group">
            <input 
              type="checkbox" 
              className="w-5 h-5 rounded border-slate-700 bg-slate-800 text-orange-600 focus:ring-orange-500"
              checked={formData.scrimmageFeb28}
              onChange={e => setFormData({...formData, scrimmageFeb28: e.target.checked})} 
            />
            <span className="text-xs md:text-sm font-medium group-hover:text-orange-400 transition-colors">
              I am available for the Feb 28th scrimmage
            </span>
          </label>
        </div>

        <button 
          type="submit" 
          disabled={mutation.isPending}
          className="w-full py-4 bg-orange-600 text-white font-black uppercase tracking-widest rounded-lg hover:bg-orange-500 transition-all transform active:scale-[0.98] disabled:opacity-50 shadow-xl shadow-orange-900/10"
        >
          {mutation.isPending ? 'Processing...' : 'Submit My Info'}
        </button>
      </form>
    </div>
  );
};

export default Roster;