import React from 'react';

export default function Contact() {
  const calendarLink = "https://calendar.app.google/Cr2qFWBmVg3X7RMy7";

  return (
    // 'flex-col' for mobile and 'md:flex-row' for desktop is the only way to ensure this fits
    <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 px-6 h-full min-h-0 py-2 md:py-8">
      
      {/* LEFT COLUMN: The Pitch */}
      <div className="w-full md:w-[45%] text-left flex flex-col justify-center">
        <h2 className="text-blue-500 font-black uppercase tracking-[0.3em] mb-1 md:mb-4 text-[10px] md:text-sm">
          Get in Touch
        </h2>
        <h3 className="text-2xl md:text-6xl font-black text-white italic leading-tight uppercase mb-2 md:mb-8">
          Let's Build the <span className="text-blue-600">Future.</span>
        </h3>
        
        <p className="text-blue-100/60 text-xs md:text-lg mb-0 md:mb-12 max-w-md leading-relaxed hidden sm:block">
          We are building this brand and community from the ground up. If you want to be a founding partner for the 2026 season, let's talk.
        </p>

        {/* DESKTOP LINKS: Hidden on mobile landscape/portrait */}
        <div className="hidden md:flex flex-col space-y-6">
          <ContactLink icon="email" label="Email" value="pbgamegen@gmail.com" href="mailto:pbgamegen@gmail.com" />
          <ContactLink icon="ig" label="Instagram" value="@uplqc" href="https://www.instagram.com/uplqc" />
        </div>
      </div>

      {/* RIGHT COLUMN: Booking Card + Mobile Links */}
      <div className="w-full md:w-[55%] flex flex-col items-center min-h-0">
        
        {/* The Card: We used p-4 and text-sm for mobile to ensure the button doesn't clip */}
        <div className="w-full p-4 md:p-12 bg-blue-900/10 border border-blue-900/30 rounded-2xl md:rounded-3xl backdrop-blur-sm text-center flex flex-col items-center justify-center shadow-2xl min-h-0">
          <div className="h-10 w-10 md:h-20 md:w-20 bg-blue-600/20 rounded-xl flex items-center justify-center mb-2 md:mb-8 text-blue-500 shrink-0">
            <svg className="w-6 h-6 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          
          <h4 className="text-white font-black uppercase tracking-widest text-base md:text-2xl mb-3 md:mb-4 shrink-0">
            Book a Strategy Session
          </h4>
          
          <a 
            href={calendarLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full md:w-auto px-6 py-3 md:px-10 md:py-5 bg-blue-600 text-white font-black uppercase tracking-widest rounded-xl hover:bg-blue-500 transition-all shadow-[0_10px_20px_rgba(37,99,235,0.3)] text-xs md:text-base shrink-0"
          >
            View Availability
          </a>
        </div>

        {/* MOBILE LINKS: Now placed horizontally directly under the card for mobile devices */}
        <div className="flex md:hidden flex-row justify-center gap-3 mt-4 w-full shrink-0">
          <MobileLink icon="email" value="Email Us" href="mailto:pbgamegen@gmail.com" />
          <MobileLink icon="ig" value="@uplqc" href="https://www.instagram.com/uplqc" />
        </div>
      </div>
    </div>
  );
}

function ContactLink({ icon, label, value, href }) {
  return (
    <a href={href} className="flex items-center group cursor-pointer w-fit">
      <div className="h-10 w-10 bg-blue-600/20 rounded-lg flex items-center justify-center text-blue-400 mr-4 group-hover:bg-blue-500 group-hover:text-white transition-all">
        {icon === 'email' ? (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        ) : (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2"></rect><circle cx="12" cy="12" r="4" strokeWidth="2"></circle></svg>
        )}
      </div>
      <div>
        <p className="text-xs font-black uppercase tracking-widest text-blue-400 mb-0.5">{label}</p>
        <p className="text-white font-bold group-hover:text-blue-300 transition-colors">{value}</p>
      </div>
    </a>
  );
}

function MobileLink({ icon, value, href }) {
  return (
    <a href={href} className="flex items-center bg-blue-900/20 border border-blue-900/30 px-3 py-2 rounded-xl shrink-0">
      <span className="text-blue-400 mr-2">
        {icon === 'email' ? <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeWidth="2"/></svg> : <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2"></rect><circle cx="12" cy="12" r="3" strokeWidth="2"></circle></svg>}
      </span>
      <span className="text-white text-[9px] font-black uppercase tracking-widest">{value}</span>
    </a>
  );
}