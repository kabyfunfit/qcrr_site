import React from 'react';

export default function TechEdge() {
  return (
    <div className="max-w-7xl w-full h-full min-h-0 flex flex-col items-center justify-center px-12 sm:px-16 md:px-8 py-2">
      {/* HEADER SECTION */}
      <div className="text-center mb-2 md:mb-16 [@media(max-height:700px)]:mb-2 shrink-0">
        <h2 className="text-blue-500 font-black uppercase tracking-[0.3em] mb-1 md:mb-4 text-[8px] md:text-sm">
          The Roadmap
        </h2>
        <h3 className="text-xl sm:text-2xl md:text-6xl font-black text-white italic leading-tight uppercase">
          Developing the <span className="text-blue-600">Edge</span>
        </h3>
      </div>

      {/* FOUR PILLAR GRID: Forced to 4 columns on all screen sizes */}
      <div className="grid grid-cols-4 gap-2 md:gap-6 w-full min-h-0 overflow-y-auto no-scrollbar">
        
        {/* 1. BROADCAST DEVELOPMENT */}
        <div className="bg-blue-900/10 border border-blue-900/30 p-2 sm:p-4 md:p-8 rounded-xl md:rounded-3xl backdrop-blur-sm relative group hover:border-blue-500/50 transition-all flex flex-col">
          <div className="absolute top-4 right-6 text-[10px] font-black uppercase tracking-widest text-blue-500/40 hidden lg:block">In Development</div>
          <div className="h-5 w-5 sm:h-8 sm:w-8 md:h-12 md:w-12 bg-blue-600/20 rounded-md md:rounded-xl flex items-center justify-center mb-1 sm:mb-2 md:mb-6 text-blue-500 shrink-0">
            <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
          </div>
          <h4 className="text-white font-black uppercase tracking-widest text-[8px] sm:text-[10px] md:text-lg mb-0.5 md:mb-3 leading-tight">Custom Broadcast</h4>
          <p className="text-blue-100/60 text-[7px] sm:text-[9px] md:text-sm leading-tight md:leading-relaxed">
            Engineering a proprietary multi-camera system to provide elite digital visibility for our team and brand partners.
          </p>
        </div>

        {/* 2. TOURNAMENT SERIES */}
        <div className="bg-blue-900/10 border border-blue-900/30 p-2 sm:p-4 md:p-8 rounded-xl md:rounded-3xl backdrop-blur-sm relative group hover:border-blue-500/50 transition-all flex flex-col">
          <div className="absolute top-4 right-6 text-[10px] font-black uppercase tracking-widest text-blue-500/40 hidden lg:block">In Development</div>
          <div className="h-5 w-5 sm:h-8 sm:w-8 md:h-12 md:w-12 bg-blue-600/20 rounded-md md:rounded-xl flex items-center justify-center mb-1 sm:mb-2 md:mb-6 text-blue-500 shrink-0">
            <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          </div>
          <h4 className="text-white font-black uppercase tracking-widest text-[8px] sm:text-[10px] md:text-lg mb-0.5 md:mb-3 leading-tight">Proprietary Events</h4>
          <p className="text-blue-100/60 text-[7px] sm:text-[9px] md:text-sm leading-tight md:leading-relaxed">
            Launching "The Beat Down" and "The Battle Ground" series—physical stages for high-level competition and brand activation.
          </p>
        </div>

        {/* 3. MEDIA EXPANSION */}
        <div className="bg-blue-900/10 border border-blue-900/30 p-2 sm:p-4 md:p-8 rounded-xl md:rounded-3xl backdrop-blur-sm group hover:border-blue-500/50 transition-all flex flex-col">
          <div className="h-5 w-5 sm:h-8 sm:w-8 md:h-12 md:w-12 bg-blue-600/20 rounded-md md:rounded-xl flex items-center justify-center mb-1 sm:mb-2 md:mb-6 text-blue-500 shrink-0">
            <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3-3z" /></svg>
          </div>
          <h4 className="text-white font-black uppercase tracking-widest text-[8px] sm:text-[10px] md:text-lg mb-0.5 md:mb-3 leading-tight">Narrative Scaling</h4>
          <p className="text-blue-100/60 text-[7px] sm:text-[9px] md:text-sm leading-tight md:leading-relaxed">
            Expanding the "How we Runnin'" podcast and digital content to YouTube and TikTok to showcase our brand supporters.
          </p>
        </div>

        {/* 4. FOUNDING PLACEMENT */}
        <div className="bg-blue-600/10 border border-blue-500/50 p-2 sm:p-4 md:p-8 rounded-xl md:rounded-3xl backdrop-blur-sm group hover:border-blue-500/50 transition-all shadow-[0_0_30px_rgba(37,99,235,0.1)] flex flex-col">
          <div className="h-5 w-5 sm:h-8 sm:w-8 md:h-12 md:w-12 bg-blue-600/20 rounded-md md:rounded-xl flex items-center justify-center mb-1 sm:mb-2 md:mb-6 text-blue-400 shrink-0">
            <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          </div>
          <h4 className="text-blue-400 font-black uppercase tracking-widest text-[8px] sm:text-[10px] md:text-lg mb-0.5 md:mb-3 leading-tight">Founding Impact</h4>
          <p className="text-white text-[7px] sm:text-[9px] md:text-sm leading-tight md:leading-relaxed font-bold">
            Securing primary brand placement on uniforms and physical banners as we launch our 2026 season infrastructure.
          </p>
        </div>

      </div>
    </div>
  );
}