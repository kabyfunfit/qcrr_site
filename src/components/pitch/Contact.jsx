import React from 'react';

export default function Contact() {
  const calendarLink = "https://calendar.app.google/Cr2qFWBmVg3X7RMy7";

  return (
    // 'min-h-0' is critical on mobile to allow content to shrink instead of overflowing
    <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8 px-6 md:px-12 h-full min-h-0 py-4">
      
      {/* TEXT SECTION: Takes up half on desktop, full width on mobile */}
      <div className="flex-1 flex flex-col justify-center text-left min-h-0">
        <h2 className="text-blue-500 font-black uppercase tracking-[0.3em] mb-2 text-xs md:text-sm">
          Get in Touch
        </h2>
        <h3 className="text-3xl md:text-6xl font-black text-white italic leading-tight uppercase mb-4">
          Let's Build the <span className="text-blue-600">Future.</span>
        </h3>
        
        <p className="text-blue-100/60 text-sm md:text-lg mb-6 leading-relaxed max-w-md hidden sm:block">
          We are building this brand and community from the ground up. If you want to be a founding partner for the 2026 season, let's talk.
        </p>

        {/* DESKTOP LINKS: Hidden on mobile */}
        <div className="hidden md:flex flex-col gap-6">
          <ContactItem icon="email" label="Email" value="pbgamegen@gmail.com" />
          <ContactItem icon="ig" label="Instagram" value="@uplqc" />
        </div>
      </div>

      {/* ACTION SECTION: The Booking Card */}
      <div className="flex-1 w-full flex flex-col items-center min-h-0">
        <div className="w-full p-6 md:p-12 bg-blue-900/10 border border-blue-900/30 rounded-3xl backdrop-blur-sm text-center flex flex-col items-center justify-center shadow-xl">
          <div className="h-12 w-12 md:h-20 md:w-20 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-4 md:mb-8 text-blue-500 shrink-0">
            <svg className="w-6 h-6 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          
          <h4 className="text-white font-black uppercase tracking-widest text-lg md:text-2xl mb-6">
            Book a Strategy Session
          </h4>
          
          <a 
            href={calendarLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full md:w-auto px-8 py-4 bg-blue-600 text-white font-black uppercase tracking-widest rounded-xl hover:bg-blue-500 transition-all text-sm md:text-base"
          >
            View Availability
          </a>
        </div>

        {/* MOBILE LINKS: Moves under the card for small screens */}
        <div className="flex md:hidden gap-4 mt-6">
          <MobileContactLink icon="email" value="Email Us" href="mailto:pbgamegen@gmail.com" />
          <MobileContactLink icon="ig" value="@uplqc" href="https://www.instagram.com/uplqc" />
        </div>
      </div>
    </div>
  );
}

// Clean UI sub-components using only Tailwind utility classes
function ContactItem({ icon, label, value }) {
  return (
    <div className="flex items-center gap-4">
      <div className="h-10 w-10 bg-blue-600/20 rounded-lg flex items-center justify-center text-blue-400">
        {icon === 'email' ? <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeWidth="2"/></svg> : <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2"></rect><circle cx="12" cy="12" r="4" strokeWidth="2"></circle></svg>}
      </div>
      <div>
        <p className="text-[10px] font-black uppercase tracking-widest text-blue-400">{label}</p>
        <p className="text-white font-bold">{value}</p>
      </div>
    </div>
  );
}

function MobileContactLink({ icon, value, href }) {
  return (
    <a href={href} className="flex items-center bg-blue-900/20 border border-blue-900/30 px-4 py-2 rounded-xl text-white text-[10px] font-black uppercase tracking-widest">
      <span className="text-blue-400 mr-2">
        {icon === 'email' ? <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeWidth="2"/></svg> : <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2"></rect><circle cx="12" cy="12" r="4" strokeWidth="2"></circle></svg>}
      </span>
      {value}
    </a>
  );
}