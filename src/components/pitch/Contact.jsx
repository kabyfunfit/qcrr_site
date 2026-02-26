import React from 'react';

export default function Contact() {
  const calendarLink = "https://calendar.app.google/Cr2qFWBmVg3X7RMy7";

  return (
    // Forced 2 columns on all screens and added padding to clear navigation arrows
    <div className="max-w-7xl w-full grid grid-cols-2 gap-4 md:gap-8 lg:gap-12 items-center px-12 sm:px-16 md:px-8 h-full min-h-0 py-2">
      
      {/* LEFT COLUMN: Narrative Text */}
      <div className="text-left flex flex-col justify-center min-h-0">
        <h2 className="text-blue-500 font-black uppercase tracking-[0.3em] mb-1 md:mb-4 text-[8px] md:text-sm">
          Get in Touch
        </h2>
        <h3 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-white italic leading-tight uppercase mb-2 md:mb-8">
          Let's Build the <span className="text-blue-600">Future.</span>
        </h3>
        <p className="text-blue-100/60 text-[9px] sm:text-xs md:text-base lg:text-lg max-w-sm leading-relaxed">
          We are building this brand and community from the ground up. If you want to be a founding partner for the 2026 season, let's talk. Grab a time on the calendar or reach out directly.
        </p>
      </div>

      {/* RIGHT COLUMN: Booking Card + Contact Links Below */}
      <div className="flex flex-col items-center justify-center min-h-0 h-full py-2 md:py-4">
        
        {/* Booking Card */}
        <div className="flex flex-col items-center justify-center p-3 sm:p-6 lg:p-12 bg-blue-900/10 border border-blue-900/30 rounded-xl md:rounded-3xl backdrop-blur-sm text-center w-full min-h-0 shadow-lg">
          <div className="h-6 w-6 sm:h-10 sm:w-10 lg:h-20 lg:w-20 bg-blue-600/20 rounded-lg lg:rounded-2xl flex items-center justify-center mb-2 sm:mb-4 lg:mb-8 text-blue-500 shrink-0">
            <svg className="w-3 h-3 sm:w-5 sm:h-5 lg:w-10 lg:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          
          <h4 className="text-white font-black uppercase tracking-widest text-[10px] sm:text-sm lg:text-2xl mb-2 sm:mb-4 lg:mb-6 shrink-0">
            Book a Strategy Session
          </h4>
          
          <a 
            href={calendarLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 sm:px-6 sm:py-3 lg:px-10 lg:py-5 bg-blue-600 text-white font-black uppercase tracking-widest rounded-lg lg:rounded-xl hover:bg-blue-500 transition-all shadow-[0_10px_20px_rgba(37,99,235,0.3)] hover:scale-105 text-[8px] sm:text-[10px] lg:text-base shrink-0"
          >
            View Availability
          </a>
        </div>

        {/* CONTACT LINKS: Positioned BELOW the card in the grid flow */}
        <div className="flex flex-row justify-center gap-4 md:gap-10 mt-2 sm:mt-4 md:mt-8 w-full shrink-0">
          <a href="mailto:pbgamegen@gmail.com" className="flex items-center group cursor-pointer">
            <div className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 bg-blue-600/20 rounded-md md:rounded-lg flex items-center justify-center text-blue-400 mr-2 md:mr-3 group-hover:bg-blue-500 group-hover:text-white transition-all">
              <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </div>
            <div className="hidden sm:block">
              <p className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-blue-400">Email</p>
              <p className="text-[10px] md:text-xs text-white font-bold group-hover:text-blue-300">pbgamegen@gmail.com</p>
            </div>
            <div className="sm:hidden text-white font-black uppercase tracking-widest text-[8px]">Email Us</div>
          </a>

          <a href="https://www.instagram.com/uplqc" target="_blank" rel="noopener noreferrer" className="flex items-center group cursor-pointer">
            <div className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 bg-blue-600/20 rounded-md md:rounded-lg flex items-center justify-center text-blue-400 mr-2 md:mr-3 group-hover:bg-blue-500 group-hover:text-white transition-all">
              <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" strokeWidth="2"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2" strokeLinecap="round"></line>
              </svg>
            </div>
            <div className="hidden sm:block">
              <p className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-blue-400">Instagram</p>
              <p className="text-[10px] md:text-xs text-white font-bold group-hover:text-blue-300">@uplqc</p>
            </div>
            <div className="sm:hidden text-white font-black uppercase tracking-widest text-[8px]">@uplqc</div>
          </a>
        </div>

      </div>
    </div>
  );
}