import React, { useState, useEffect, useRef } from 'react';
import Logo from '../assets/logo.svg';
import Title from '../components/pitch/Title';
import Vision from '../components/pitch/Vision';
import Reach from '../components/pitch/Reach';
import Roadmap from '../components/pitch/Roadmap';
import Tiers from '../components/pitch/Tiers';
import Contact from '../components/pitch/Contact';

export default function PitchDeck() {
  const [currentPage, setCurrentPage] = useState(0);
  const isScrolling = useRef(false);

  // The locked-in sequence for the 2026 Road Runners Pitch
  const pages = [
    { title: "Title", component: <Title />, type: 'bold' },
    { title: "Vision", component: <Vision />, type: 'subtle' },
    { title: "Reach", component: <Reach />, type: 'subtle' },
    { title: "Roadmap", component: <Roadmap />, type: 'subtle' },
    // This passes the "Inquire" action to the Tiers component to move to the last slide (Index 5)
    { title: "Tiers", component: <Tiers onSelect={() => setCurrentPage(5)} />, type: 'subtle' },
    { title: "Contact", component: <Contact />, type: 'bold' }
  ];

  const isBold = pages[currentPage].type === 'bold';

  // Handle Scroll Navigation
  useEffect(() => {
    const handleWheel = (e) => {
      if (isScrolling.current) return;
      if (Math.abs(e.deltaY) < 15) return;
      if (e.deltaY > 0 && currentPage < pages.length - 1) {
        isScrolling.current = true;
        setCurrentPage(p => p + 1);
        setTimeout(() => { isScrolling.current = false; }, 1000);
      } else if (e.deltaY < 0 && currentPage > 0) {
        isScrolling.current = true;
        setCurrentPage(p => p - 1);
        setTimeout(() => { isScrolling.current = false; }, 1000);
      }
    };
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentPage, pages.length]);

  return (
    <div className="relative h-screen w-full bg-black overflow-hidden font-sans select-none">
      {/* Dynamic Background Gradient */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${isBold ? 'bg-[radial-gradient(ellipse_at_top,#1e3a8a_0%,#000000_80%)] opacity-100' : 'bg-[radial-gradient(circle_at_50%_50%,#001a33_0%,#000000_100%)] opacity-70'}`}></div>
      
      {/* Navigation Bar */}
      <nav className="absolute top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-blue-900/20 h-20">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between relative">
          <div className="absolute left-6 top-0 h-full flex items-start z-[60]">
            <div className="bg-black/40 backdrop-blur-md p-4 rounded-b-3xl border-x border-b border-blue-900/30 shadow-[0_20px_40px_rgba(0,0,0,0.9)]">
              <img src={Logo} alt="Logo" className="h-24 md:h-32 w-auto" />
            </div>
          </div>
          <div className="flex justify-start md:justify-center overflow-x-auto no-scrollbar scroll-smooth flex-grow ml-36 md:ml-0 h-full items-center">
            {pages.map((page, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`px-4 md:px-6 h-full text-[10px] md:text-xs font-black uppercase tracking-[0.25em] transition-all relative whitespace-nowrap outline-none ${currentPage === index ? 'text-blue-400' : 'text-gray-500 hover:text-white'}`}
              >
                {page.title}
                {currentPage === index && <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 shadow-[0_0_20px_#2563eb]"></div>}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Page Slider */}
      <div className="flex h-full transition-transform duration-700 cubic-bezier(0.4, 0, 0.2, 1) relative z-10" style={{ transform: `translateX(-${currentPage * 100}vw)`, width: `${pages.length * 100}vw` }}>
        {pages.map((page, index) => (
          <div key={index} className="w-screen h-full flex items-center justify-center px-12 pt-32 pb-12 relative">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none"></div>
            <div className="relative z-10 w-full flex justify-center">{page.component}</div>
          </div>
        ))}
      </div>

      {/* Manual Arrow Controls */}
      <div className="hidden md:block absolute inset-0 pointer-events-none z-[70]">
        <button onClick={() => setCurrentPage(p => Math.max(0, p - 1))} className={`pointer-events-auto absolute left-6 top-1/2 -translate-y-1/2 p-4 rounded-full bg-black/40 border border-blue-900/30 text-white backdrop-blur-md transition-all ${currentPage === 0 ? 'opacity-0' : 'opacity-100 hover:bg-blue-900/60'}`}>
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button onClick={() => setCurrentPage(p => Math.min(pages.length - 1, p + 1))} className={`pointer-events-auto absolute right-6 top-1/2 -translate-y-1/2 p-4 rounded-full bg-black/40 border border-blue-900/30 text-white backdrop-blur-md transition-all ${currentPage === pages.length - 1 ? 'opacity-0' : 'opacity-100 hover:bg-blue-900/60'}`}>
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
    </div>
  );
}