import React from 'react';

export default function Contact() {
  const calendarLink = "https://calendar.app.google/Cr2qFWBmVg3X7RMy7";

  return (
    <div className="max-w-7xl w-full grid md:grid-cols-[40%_60%] gap-12 items-center px-8">
      {/* LEFT COLUMN: Direct Contact Info */}
      <div className="text-left">
        <h2 className="text-blue-500 font-black uppercase tracking-[0.3em] mb-4 text-xs md:text-sm">
          Get in Touch
        </h2>
        <h3 className="text-4xl md:text-6xl font-black text-white italic leading-tight uppercase mb-8">
          Let's Build the <span className="text-blue-600">Future.</span>
        </h3>
        
        {/* Updated phrasing to drop the corporate talk and focus on community */}
        <p className="text-blue-100/60 text-lg mb-12 max-w-sm leading-relaxed">
          We are building this brand and community from the ground up. If you want to be a founding partner for the 2026 season, let's talk. Grab a time on the calendar or reach out directly.
        </p>

        <div className="space-y-6">
          {/* EMAIL LINK: Uses mailto: to open email client */}
          <a href="mailto:pbgamegen@gmail.com" className="flex items-center group cursor-pointer">
            <div className="h-10 w-10 bg-blue-600/20 rounded-lg flex items-center justify-center text-blue-400 mr-4 group-hover:bg-blue-500 group-hover:text-white transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-blue-400 mb-0.5">Email</p>
              <p className="text-white font-bold group-hover:text-blue-300 transition-colors">pbgamegen@gmail.com</p>
            </div>
          </a>

          {/* INSTAGRAM LINK: Opens profile in new tab */}
          <a href="https://www.instagram.com/uplqc" target="_blank" rel="noopener noreferrer" className="flex items-center group cursor-pointer">
            <div className="h-10 w-10 bg-blue-600/20 rounded-lg flex items-center justify-center text-blue-400 mr-4 group-hover:bg-blue-500 group-hover:text-white transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" strokeWidth="2"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2" strokeLinecap="round"></line>
              </svg>
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-blue-400 mb-0.5">Instagram</p>
              <p className="text-white font-bold group-hover:text-blue-300 transition-colors">@uplqc</p>
            </div>
          </a>
        </div>
      </div>

      {/* RIGHT COLUMN: Clean Booking Card */}
      <div className="flex flex-col items-center justify-center p-12 bg-blue-900/10 border border-blue-900/30 rounded-3xl backdrop-blur-sm text-center w-full h-full min-h-[400px]">
        <div className="h-20 w-20 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-8 text-blue-500">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        
        <h4 className="text-white font-black uppercase tracking-widest text-2xl mb-4">
          Book a Strategy Session
        </h4>
        
        <p className="text-blue-100/60 mb-10 max-w-sm leading-relaxed">
          Select a time on our calendar to discuss integration, event placement, and 2026 partnership opportunities.
        </p>
        
        <a 
          href={calendarLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-10 py-5 bg-blue-600 text-white font-black uppercase tracking-widest rounded-xl hover:bg-blue-500 transition-all shadow-[0_10px_20px_rgba(37,99,235,0.3)] hover:scale-105"
        >
          View Availability
        </a>
      </div>
    </div>
  );
}