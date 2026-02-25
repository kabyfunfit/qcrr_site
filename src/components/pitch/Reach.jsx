import React from 'react';

export default function Reach() {
  return (
    <div className="max-w-7xl w-full flex flex-col items-center px-8">
      {/* HEADER SECTION */}
      <div className="text-center mb-16">
        <h2 className="text-blue-500 font-black uppercase tracking-[0.3em] mb-4 text-xs md:text-sm">
          Market Reach
        </h2>
        <h3 className="text-4xl md:text-6xl font-black text-white italic leading-tight uppercase">
          Network & <span className="text-blue-600">Exposure</span>
        </h3>
      </div>

      {/* THREE COLUMN GRID */}
      <div className="grid md:grid-cols-3 gap-8 w-full">
        
        {/* COLUMN 1: PHYSICAL ANCHOR */}
        <div className="bg-blue-900/10 border border-blue-900/30 p-8 rounded-3xl backdrop-blur-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          </div>
          <h4 className="text-white font-black uppercase tracking-widest text-xl mb-4">Venue Capacity</h4>
          <ul className="space-y-4 text-blue-100/60 font-medium">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">/</span> 
              Primary residency at Arizona Athletic Grounds (AAG)—a premier sports hub.
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">/</span> 
              Exposure to high-volume daily foot traffic of competitive athletes and spectators.
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">/</span> 
              Strategic presence at national tournament events throughout the season.
            </li>
          </ul>
        </div>

        {/* COLUMN 2: MEDIA MULTIPLIER */}
        <div className="bg-blue-900/10 border border-blue-900/30 p-8 rounded-3xl backdrop-blur-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" /></svg>
          </div>
          <h4 className="text-white font-black uppercase tracking-widest text-xl mb-4">Media Presence</h4>
          <ul className="space-y-4 text-blue-100/60 font-medium">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">/</span> 
              Direct community engagement via the "How we Runnin'" podcast.
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">/</span> 
              Cross-platform visibility through the UPL League media network.
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">/</span> 
              Active social narrative tracking the team's professional evolution.
            </li>
          </ul>
        </div>

        {/* COLUMN 3: FUTURE SCALING */}
        <div className="bg-blue-600/10 border border-blue-500/50 p-8 rounded-3xl backdrop-blur-sm relative overflow-hidden group shadow-[0_0_30px_rgba(37,99,235,0.1)]">
          <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
            <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          </div>
          <h4 className="text-blue-400 font-black uppercase tracking-widest text-xl mb-4">Partner Growth</h4>
          <p className="text-sm text-blue-300/80 mb-6 italic">Sponsorship facilitates the launch of these key media assets:</p>
          <ul className="space-y-4 text-white font-bold">
            <li className="flex items-start">
              <div className="h-2 w-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
              Custom Multi-Camera Broadcast Platform.
            </li>
            <li className="flex items-start">
              <div className="h-2 w-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
              Proprietary "Battle Ground" & "Beat Down" Series.
            </li>
            <li className="flex items-start">
              <div className="h-2 w-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
              Exclusive Branding on National Broadcasts.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}