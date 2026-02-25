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

  const pages = [
    { title: "Title", component: <Title />, type: 'bold' },
    { title: "Vision", component: <Vision />, type: 'subtle' },
    { title: "Reach", component: <Reach />, type: 'subtle' },
    { title: "Roadmap", component: <Roadmap />, type: 'subtle' },
    { title: "Tiers", component: <Tiers onSelect={() => setCurrentPage(5)} />, type: 'subtle' },
    { title: "Contact", component: <Contact />, type: 'bold' }
  ];

  const isBold = pages[currentPage].type === 'bold';

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
    <>
      {/* MOBILE PORTRAIT LOCK: Forces Landscape */}
      <div className="fixed inset-0 z-[100] bg-black text-white flex-col items-center justify-center text-center px-8 hidden [@media(orientation:portrait)_and_(max-width:768px)]:flex">
        <svg className="w-16 h-16 text-blue-500 mb-6 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 10.5V6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2v-4.5m10-4.5l-3-3m0 0l-3 3m3-3v9" transform="rotate(90 12 12)" />
        </svg>
        <h2 className="text-2xl font-black uppercase tracking-widest mb-4">Rotate Device</h2>
        <p className="text-blue-100/60 font-medium max-w-xs">
          Please rotate your phone sideways to view this pitch deck.
        </p>
      </div>

      <div className="relative h-screen w-full bg-black overflow-hidden font-sans select-none flex flex-col">
        <div className={`absolute inset-0 transition-opacity duration-1000 ${isBold ? 'bg-[radial-gradient(ellipse_at_top,#1e3a8a_0%,#000000_80%)] opacity-100' : 'bg-[radial-gradient(circle_at_50%_50%,#001a33_0%,#000000_100%)] opacity-70'}`}></div>
        
        <nav className="absolute top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-blue-900/20 h-20">
          <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between relative">
            <div className="absolute left-6 top-0 h-full flex items-start z-[60]">
              <div className="bg-black/40 backdrop-blur-md p-4 rounded-b-3xl border-x border-b border-blue-900/30 shadow-[0_20px_40px_rgba(0,0,0,0.9)]">
                <img src={Logo} alt="Logo" className="h-16 md:h-24 lg:h-32 w-auto transition-all" />
              </div>
            </div>
            <div className="flex justify-start md:justify-center overflow-x-auto no-scrollbar scroll-smooth flex-grow ml-32 md:ml-0 h-full items-center">
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

        <div className="flex h-full transition-transform duration-700 cubic-bezier(0.4, 0, 0.2, 1) relative z-10" style={{ transform: `translateX(-${currentPage * 100}vw)`, width: `${pages.length * 100}vw` }}>
          {pages.map((page, index) => (
            <div key={index} className="w-screen h-full flex items-center justify-center px-8 md:px-28 pt-24 md:pt-32 [@media(max-height:700px)]:pt-20 pb-8 md:pb-12 relative min-h-0">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none"></div>
              <div className="relative z-10 w-full h-full flex justify-center items-center min-h-0">
                {page.component}
              </div>
            </div>
          ))}
        </div>

        <div className="hidden md:block absolute inset-0 pointer-events-none z-[70]">
          <button onClick={() => setCurrentPage(p => Math.max(0, p - 1))} className={`pointer-events-auto absolute left-6 top-1/2 -translate-y-1/2 p-4 rounded-full bg-black/40 border border-blue-900/30 text-white backdrop-blur-md transition-all ${currentPage === 0 ? 'opacity-0' : 'opacity-100 hover:bg-blue-900/60'}`}>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button onClick={() => setCurrentPage(p => Math.min(pages.length - 1, p + 1))} className={`pointer-events-auto absolute right-6 top-1/2 -translate-y-1/2 p-4 rounded-full bg-black/40 border border-blue-900/30 text-white backdrop-blur-md transition-all ${currentPage === pages.length - 1 ? 'opacity-0' : 'opacity-100 hover:bg-blue-900/60'}`}>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>
    </>
  );
}