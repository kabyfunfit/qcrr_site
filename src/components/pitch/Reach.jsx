import React from 'react';

export default function Reach() {
  return (
    // 'h-full flex flex-col justify-center' forces it to respect the screen height
    <div className="max-w-7xl w-full h-full min-h-0 flex flex-col justify-center items-center px-4 md:px-8 py-2">
      
      {/* HEADER SECTION */}
      {/* Margins dynamically shrink on short screens */}
      <div className="text-center mb-4 md:mb-12 [@media(max-height:700px)]:mb-2">
        <h2 className="text-blue-500 font-black uppercase tracking-[0.3em] mb-1 md:mb-4 text-[10px] md:text-sm">
          Market Reach
        </h2>
        {/* Text scales down heavily if vertical space is tight */}
        <h3 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl [@media(max-height:700px)]:text-2xl font-black text-white italic leading-tight uppercase">
          Network & <span className="text-blue-600">Exposure</span>
        </h3>
      </div>

      {/* THREE COLUMN GRID */}
      {/* Forced to 3 columns to prevent vertical stacking on mobile landscape */}
      <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-8 w-full min-h-0">
        
        {/* COLUMN 1: PHYSICAL ANCHOR */}
        <div className="bg-blue-900/10 border border-blue-900/30 p-3 sm:p-5 lg:p-8 rounded-2xl lg:rounded-3xl backdrop-blur-sm relative overflow-hidden group flex flex-col justify-start">
          {/* Background Icon hides on very short screens to save space */}
          <div className="absolute top-0 right-0 p-2 lg:p-4 opacity-10 group-hover:opacity-20 transition-opacity [@media(max-height:700px)]:hidden">
            <svg className="w-6 h-6 lg:w-12 lg:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          </div>
          <h4 className="text-white font-black uppercase tracking-widest text-[9px] sm:text-xs lg:text-xl mb-2 lg:mb-4 [@media(max-height:700px)]:mb-1">Venue Capacity</h4>
          <ul className="space-y-1.5 lg:space-y-4 text-blue-100/60 font-medium text-[8px] sm:text-[10px] lg:text-sm leading-tight">
            <li className="flex items-start">
              <span className="text-blue-500 mr-1 lg:mr-2">/</span> 
              <span>Primary residency at Arizona Athletic Grounds (AAG)—a premier sports hub.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-1 lg:mr-2">/</span> 
              <span>Exposure to high-volume daily foot traffic of competitive athletes and spectators.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-1 lg:mr-2">/</span> 
              <span>Strategic presence at national tournament events throughout the season.</span>
            </li>
          </ul>
        </div>

        {/* COLUMN 2: MEDIA MULTIPLIER */}
        <div className="bg-blue-900/10 border border-blue-900/30 p-3 sm:p-5 lg:p-8 rounded-2xl lg:rounded-3xl backdrop-blur-sm relative overflow-hidden group flex flex-col justify-start">
          <div className="absolute top-0 right-0 p-2 lg:p-4 opacity-10 group-hover:opacity-20 transition-opacity [@media(max-height:700px)]:hidden">
            <svg className="w-6 h-6 lg:w-12 lg:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" /></svg>
          </div>
          <h4 className="text-white font-black uppercase tracking-widest text-[9px] sm:text-xs lg:text-xl mb-2 lg:mb-4 [@media(max-height:700px)]:mb-1">Media Presence</h4>
          <ul className="space-y-1.5 lg:space-y-4 text-blue-100/60 font-medium text-[8px] sm:text-[10px] lg:text-sm leading-tight">
            <li className="flex items-start">
              <span className="text-blue-500 mr-1 lg:mr-2">/</span> 
              <span>Direct community engagement via the "How we Runnin'" podcast.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-1 lg:mr-2">/</span> 
              <span>Cross-platform visibility through the UPL League media network.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-1 lg:mr-2">/</span> 
              <span>Active social narrative tracking the team's professional evolution.</span>
            </li>
          </ul>
        </div>

        {/* COLUMN 3: FUTURE SCALING */}
        <div className="bg-blue-600/10 border border-blue-500/50 p-3 sm:p-5 lg:p-8 rounded-2xl lg:rounded-3xl backdrop-blur-sm relative overflow-hidden group shadow-[0_0_30px_rgba(37,99,235,0.1)] flex flex-col justify-start">
          <div className="absolute top-0 right-0 p-2 lg:p-4 opacity-20 group-hover:opacity-40 transition-opacity [@media(max-height:700px)]:hidden">
            <svg className="w-6 h-6 lg:w-12 lg:h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          </div>
          <h4 className="text-blue-400 font-black uppercase tracking-widest text-[9px] sm:text-xs lg:text-xl mb-1 lg:mb-4">Partner Growth</h4>
          <p className="text-[7px] sm:text-[9px] lg:text-sm text-blue-300/80 mb-2 lg:mb-6 italic [@media(max-height:700px)]:mb-1 leading-tight">Sponsorship facilitates the launch of these key media assets:</p>
          <ul className="space-y-1.5 lg:space-y-4 text-white font-bold text-[8px] sm:text-[10px] lg:text-sm leading-tight">
            <li className="flex items-start">
              <div className="h-1 w-1 lg:h-2 lg:w-2 bg-blue-500 rounded-full mt-1 lg:mt-1.5 mr-1 lg:mr-3 shrink-0"></div>
              <span>Custom Multi-Camera Broadcast Platform.</span>
            </li>
            <li className="flex items-start">
              <div className="h-1 w-1 lg:h-2 lg:w-2 bg-blue-500 rounded-full mt-1 lg:mt-1.5 mr-1 lg:mr-3 shrink-0"></div>
              <span>Proprietary "Battle Ground" Series.</span>
            </li>
            <li className="flex items-start">
              <div className="h-1 w-1 lg:h-2 lg:w-2 bg-blue-500 rounded-full mt-1 lg:mt-1.5 mr-1 lg:mr-3 shrink-0"></div>
              <span>Exclusive Branding on National Broadcasts.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}