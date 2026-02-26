import React, { useState, useRef, useEffect } from 'react';

// Sub-component to manage the scroll state of each individual card
const TierCard = ({ tier, onSelect }) => {
  const scrollRef = useRef(null);
  const [isAtBottom, setIsAtBottom] = useState(true); // Defaults to true; will update immediately on mount

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      // If content is taller than the container AND we haven't scrolled to the very bottom (with a 5px buffer)
      if (scrollHeight > clientHeight + 2 && scrollTop + clientHeight < scrollHeight - 5) {
        setIsAtBottom(false);
      } else {
        setIsAtBottom(true);
      }
    }
  };

  useEffect(() => {
    // Check scroll state immediately, and again slightly after to account for font rendering
    checkScroll();
    const timeoutId = setTimeout(checkScroll, 100);
    window.addEventListener('resize', checkScroll);
    
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  return (
    <div 
      className={`relative flex flex-col p-3 lg:p-8 [@media(max-height:700px)]:p-3 rounded-2xl lg:rounded-3xl backdrop-blur-sm transition-all min-h-0
        ${tier.highlight 
          ? 'bg-blue-600/10 border-2 border-blue-500 shadow-[0_0_30px_rgba(37,99,235,0.15)] z-10 lg:scale-105 [@media(max-height:700px)]:scale-100' 
          : 'bg-blue-900/5 border border-blue-900/30 hover:border-blue-700'
        }`}
    >
      <h4 className="text-white font-black uppercase tracking-widest text-[11px] sm:text-sm lg:text-xl mb-0.5 lg:mb-1">{tier.title}</h4>
      <p className="text-blue-400 font-bold text-[8px] sm:text-[10px] lg:text-xs uppercase tracking-tighter mb-3 lg:mb-8 [@media(max-height:700px)]:mb-2 italic">{tier.tagline}</p>
      
      {/* Scrollable list area */}
      <ul 
        ref={scrollRef}
        onScroll={checkScroll}
        className="space-y-1.5 lg:space-y-4 [@media(max-height:700px)]:space-y-1 mb-3 lg:mb-10 [@media(max-height:700px)]:mb-3 flex-grow overflow-y-auto no-scrollbar"
      >
        {tier.features.map((feature, fIdx) => (
          <li key={fIdx} className="flex items-start text-[9px] sm:text-[11px] lg:text-base text-blue-100/60 leading-tight">
            <span className="text-blue-500 mr-1.5 lg:mr-3 font-black">/</span>
            {feature}
          </li>
        ))}
      </ul>

      {/* Dynamic Bottom Area: Fixed height to prevent layout jumping */}
      <div className="shrink-0 flex items-center justify-center min-h-[28px] lg:min-h-[56px] [@media(max-height:700px)]:min-h-[24px]">
        {!isAtBottom ? (
          // Scroll Indicator (Tappable on mobile to scroll down)
          <div 
            className="flex flex-col items-center justify-center text-blue-400 animate-bounce cursor-pointer active:scale-95 transition-transform" 
            onClick={() => scrollRef.current?.scrollBy({ top: 50, behavior: 'smooth' })}
          >
            <span className="text-[7px] sm:text-[9px] lg:text-xs font-black uppercase tracking-widest">Scroll</span>
            <svg className="w-3 h-3 lg:w-4 lg:h-4 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        ) : (
          // Inquire Button
          <button 
            onClick={onSelect}
            className={`w-full py-2 lg:py-4 [@media(max-height:700px)]:py-1.5 rounded-lg lg:rounded-xl font-black uppercase tracking-widest transition-all text-[9px] sm:text-xs lg:text-sm animate-in fade-in duration-300
            ${tier.highlight 
              ? 'bg-blue-600 text-white hover:bg-blue-500 active:bg-blue-500 shadow-[0_10px_20px_rgba(37,99,235,0.3)]' 
              : 'bg-white/5 text-white border border-white/10 hover:bg-white/10 active:bg-white/10'
            }`}
          >
            Inquire
          </button>
        )}
      </div>
    </div>
  );
};

export default function Tiers({ onSelect }) {
  const tiers = [
    {
      title: "Founding Partner",
      tagline: "Total Platform Immersion",
      features: [
        "Title rights for 'The Beat Down' Series",
        "Primary brand placement on Team Uniforms",
        "Live Broadcast branding & mid-roll slots",
        "Priority On-site Branding at AAG matches",
        "Lead Podcast sponsorship segments"
      ],
      highlight: true
    },
    {
      title: "Performance Partner",
      tagline: "High-Visibility Coverage",
      features: [
        "Secondary placement on Team Uniforms",
        "Official Banner Placement at all Proprietary Events",
        "Digital broadcast overlay placement",
        "Featured Podcast Mentions & Spots",
        "Social media brand integration"
      ],
      highlight: false
    },
    {
      title: "Media Partner",
      tagline: "Digital & Network Reach",
      features: [
        "Digital placement in UPL network media",
        "Podcast 'Presented By' mentions",
        "Live stream commercial overlays",
        "Social media narrative features",
        "Venue banner placement at AAG"
      ],
      highlight: false
    }
  ];

  return (
    // Added px-12 padding on mobile to clear the navigation arrows
    <div className="max-w-7xl w-full h-full min-h-0 flex flex-col items-center justify-center px-12 sm:px-16 md:px-8 py-2">
      
      {/* HEADER SECTION */}
      <div className="text-center mb-4 md:mb-12 [@media(max-height:700px)]:mb-2 shrink-0">
        <h2 className="text-blue-500 font-black uppercase tracking-[0.3em] mb-1 md:mb-4 text-[10px] md:text-sm [@media(max-height:700px)]:mb-1">
          Partnership
        </h2>
        <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl [@media(max-height:700px)]:text-2xl font-black text-white italic leading-tight uppercase">
          Invest in the <span className="text-blue-600">Future.</span>
        </h3>
      </div>

      {/* THREE COLUMN GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 [@media(max-height:700px)]:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 w-full max-w-6xl min-h-0">
        {tiers.map((tier, idx) => (
          <TierCard key={idx} tier={tier} onSelect={onSelect} />
        ))}
      </div>
    </div>
  );
}