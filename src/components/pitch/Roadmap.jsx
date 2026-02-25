import React from 'react';

export default function Roadmap() {
  return (
    // 'h-full min-h-0 flex flex-col justify-center' forces it to stay within screen boundaries
    <div className="max-w-7xl w-full h-full min-h-0 flex flex-col justify-center items-center px-4 md:px-8 py-2">
      
      {/* HEADER SECTION */}
      <div className="text-center mb-6 md:mb-12 [@media(max-height:700px)]:mb-3">
        <h2 className="text-blue-500 font-black uppercase tracking-[0.3em] mb-2 md:mb-4 text-[10px] md:text-sm [@media(max-height:700px)]:mb-1">
          The Roadmap
        </h2>
        {/* Aggressive text scaling for short screens */}
        <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl [@media(max-height:700px)]:text-2xl font-black text-white italic leading-tight uppercase">
          Developing the <span className="text-blue-600">Edge</span>
        </h3>
      </div>

      {/* FOUR PILLAR GRID */}
      {/* FIX: [@media(max-height:700px)]:grid-cols-4 strictly forces 4 columns across on landscape mobile */}
      <div className="grid grid-cols-2 [@media(max-height:700px)]:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 w-full min-h-0">
        
        {/* 1. BROADCAST DEVELOPMENT */}
        <div className="bg-blue-900/10 border border-blue-900/30 p-4 lg:p-8 [@media(max-height:700px)]:p-3 rounded-2xl lg:rounded-3xl backdrop-blur-sm relative group hover:border-blue-500/50 transition-all flex flex-col justify-start min-h-0">
          <div className="absolute top-3 right-4 lg:top-4 lg:right-6 text-[8px] lg:text-[10px] font-black uppercase tracking-widest text-blue-500/40 [@media(max-height:700px)]:hidden">In Dev</div>
          
          {/* Icon scales down on short screens */}
          <div className="h-8 w-8 lg:h-12 lg:w-12 bg-blue-600/20 rounded-lg lg:rounded-xl flex items-center justify-center mb-3 lg:mb-6 text-blue-500 shrink-0 [@media(max-height:700px)]:h-6 [@media(max-height:700px)]:w-6 [@media(max-height:700px)]:mb-2">
            <svg className="w-4 h-4 lg:w-6 lg:h-6 [@media(max-height:700px)]:w-3 [@media(max-height:700px)]:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
          </div>
          
          <h4 className="text-white font-black uppercase tracking-widest text-[10px] sm:text-xs lg:text-lg mb-1 lg:mb-3 leading-tight">Broadcast</h4>
          <p className="text-blue-100/60 text-[9px] sm:text-[10px] lg:text-sm leading-snug">
            Custom multi-camera streaming setup utilizing Raspberry Pi components for professional match coverage.
          </p>
        </div>

        {/* 2. TOURNAMENT SERIES */}
        <div className="bg-blue-900/10 border border-blue-900/30 p-4 lg:p-8 [@media(max-height:700px)]:p-3 rounded-2xl lg:rounded-3xl backdrop-blur-sm relative group hover:border-blue-500/50 transition-all flex flex-col justify-start min-h-0">
          <div className="absolute top-3 right-4 lg:top-4 lg:right-6 text-[8px] lg:text-[10px] font-black uppercase tracking-widest text-blue-500/40 [@media(max-height:700px)]:hidden">In Dev</div>
          <div className="h-8 w-8 lg:h-12 lg:w-12 bg-blue-600/20 rounded-lg lg:rounded-xl flex items-center justify-center mb-3 lg:mb-6 text-blue-500 shrink-0 [@media(max-height:700px)]:h-6 [@media(max-height:700px)]:w-6 [@media(max-height:700px)]:mb-2">
            <svg className="w-4 h-4 lg:w-6 lg:h-6 [@media(max-height:700px)]:w-3 [@media(max-height:700px)]:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          </div>
          <h4 className="text-white font-black uppercase tracking-widest text-[10px] sm:text-xs lg:text-lg mb-1 lg:mb-3 leading-tight">Events</h4>
          <p className="text-blue-100/60 text-[9px] sm:text-[10px] lg:text-sm leading-snug">
            Launching "The Beat Down" and "The Battle Ground" series for high-level competition and brand activation.
          </p>
        </div>

        {/* 3. MEDIA EXPANSION */}
        <div className="bg-blue-900/10 border border-blue-900/30 p-4 lg:p-8 [@media(max-height:700px)]:p-3 rounded-2xl lg:rounded-3xl backdrop-blur-sm group hover:border-blue-500/50 transition-all flex flex-col justify-start min-h-0">
          <div className="h-8 w-8 lg:h-12 lg:w-12 bg-blue-600/20 rounded-lg lg:rounded-xl flex items-center justify-center mb-3 lg:mb-6 text-blue-500 shrink-0 [@media(max-height:700px)]:h-6 [@media(max-height:700px)]:w-6 [@media(max-height:700px)]:mb-2">
            <svg className="w-4 h-4 lg:w-6 lg:h-6 [@media(max-height:700px)]:w-3 [@media(max-height:700px)]:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3-3z" /></svg>
          </div>
          <h4 className="text-white font-black uppercase tracking-widest text-[10px] sm:text-xs lg:text-lg mb-1 lg:mb-3 leading-tight">Narrative</h4>
          <p className="text-blue-100/60 text-[9px] sm:text-[10px] lg:text-sm leading-snug">
            Expanding the "How we Runnin'" podcast and digital content to YouTube and TikTok to showcase supporters.
          </p>
        </div>

        {/* 4. FOUNDING PLACEMENT */}
        <div className="bg-blue-600/10 border border-blue-500/50 p-4 lg:p-8 [@media(max-height:700px)]:p-3 rounded-2xl lg:rounded-3xl backdrop-blur-sm group hover:border-blue-500/50 transition-all shadow-[0_0_30px_rgba(37,99,235,0.1)] flex flex-col justify-start min-h-0">
          <div className="h-8 w-8 lg:h-12 lg:w-12 bg-blue-600/20 rounded-lg lg:rounded-xl flex items-center justify-center mb-3 lg:mb-6 text-blue-400 shrink-0 [@media(max-height:700px)]:h-6 [@media(max-height:700px)]:w-6 [@media(max-height:700px)]:mb-2">
            <svg className="w-4 h-4 lg:w-6 lg:h-6 [@media(max-height:700px)]:w-3 [@media(max-height:700px)]:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          </div>
          <h4 className="text-blue-400 font-black uppercase tracking-widest text-[10px] sm:text-xs lg:text-lg mb-1 lg:mb-3 leading-tight">Placement</h4>
          <p className="text-white text-[9px] sm:text-[10px] lg:text-sm leading-snug font-bold">
            Securing primary brand placement on uniforms and physical banners as we launch our 2026 season infrastructure.
          </p>
        </div>

      </div>
    </div>
  );
}