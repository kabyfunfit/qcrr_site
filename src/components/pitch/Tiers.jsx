import React, { useState, useRef, useEffect } from 'react';

const TierCard = ({ tier, idx, onSelect }) => {
  const scrollRef = useRef(null);
  const [isAtBottom, setIsAtBottom] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      if (scrollHeight > clientHeight + 2 && scrollTop + clientHeight < scrollHeight - 5) {
        setIsAtBottom(false);
      } else {
        setIsAtBottom(true);
      }
    }
  };

  useEffect(() => {
    checkScroll();
    const timeoutId = setTimeout(checkScroll, 100);
    window.addEventListener('resize', checkScroll);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  // Determine styles based on tier hierarchy (0 = Founding, 1 = Performance, 2 = Media)
  let cardStyle = "";
  let buttonStyle = "";

  if (idx === 0) {
    cardStyle = "bg-blue-600/10 border-2 border-blue-400 shadow-[0_0_30px_rgba(37,99,235,0.2)] z-10 lg:scale-105 [@media(max-height:700px)]:scale-100";
    buttonStyle = "bg-blue-600 text-white shadow-[0_5px_15px_rgba(37,99,235,0.4)]";
  } else if (idx === 1) {
    cardStyle = "bg-blue-800/20 border-2 border-blue-600/50";
    buttonStyle = "bg-blue-800 text-blue-100 shadow-[0_5px_15px_rgba(30,58,138,0.4)]";
  } else {
    cardStyle = "bg-blue-900/10 border border-blue-900/40";
    buttonStyle = "bg-blue-900/80 text-blue-300";
  }

  return (
    <div className={`relative flex flex-col p-3 pb-6 lg:p-8 lg:pb-10 [@media(max-height:700px)]:p-3 [@media(max-height:700px)]:pb-6 rounded-2xl lg:rounded-3xl backdrop-blur-sm transition-all min-h-0 mb-3 md:mb-0 ${cardStyle}`}>
      
      {/* Title forced to a single line using whitespace-nowrap */}
      <h4 className="text-white font-black uppercase tracking-widest whitespace-nowrap text-[9px] sm:text-[10px] lg:text-xl mb-0.5 lg:mb-1">
        {tier.title}
      </h4>
      <p className="text-blue-400 font-bold text-[8px] sm:text-[9px] lg:text-xs uppercase tracking-tighter mb-3 lg:mb-8 [@media(max-height:700px)]:mb-2 italic truncate">
        {tier.tagline}
      </p>
      
      <ul 
        ref={scrollRef}
        onScroll={checkScroll}
        className="space-y-1.5 lg:space-y-4 [@media(max-height:700px)]:space-y-1 mb-2 flex-grow overflow-y-auto no-scrollbar"
      >
        {tier.features.map((feature, fIdx) => (
          <li key={fIdx} className="flex items-start text-[9px] sm:text-[10px] lg:text-base text-blue-100/60 leading-tight">
            <span className="text-blue-500 mr-1.5 lg:mr-3 font-black">/</span>
            {feature}
          </li>
        ))}
      </ul>

      {/* Overhanging dynamic button area */}
      <div className="absolute -bottom-3 lg:-bottom-5 left-1/2 -translate-x-1/2 w-10/12 md:w-11/12 flex items-center justify-center h-[24px] lg:h-[40px]">
        {!isAtBottom ? (
          <div 
            className={`w-full h-full flex flex-row items-center justify-center gap-1 lg:gap-2 rounded-lg lg:rounded-xl cursor-pointer active:scale-95 transition-all animate-bounce ${buttonStyle}`}
            onClick={() => scrollRef.current?.scrollBy({ top: 50, behavior: 'smooth' })}
          >
            <span className="text-[8px] lg:text-xs font-black uppercase tracking-widest">Scroll</span>
            <svg className="w-3 h-3 lg:w-4 lg:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        ) : (
          <button 
            onClick={onSelect}
            className={`w-full h-full rounded-lg lg:rounded-xl font-black uppercase tracking-widest transition-all text-[9px] lg:text-sm animate-in fade-in duration-300 ${buttonStyle}`}
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
      ]
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
      ]
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
      ]
    }
  ];

  return (
    <div className="max-w-7xl w-full h-full min-h-0 flex flex-col items-center justify-center px-12 sm:px-16 md:px-8 py-2">
      <div className="text-center mb-4 md:mb-12 [@media(max-height:700px)]:mb-2 shrink-0">
        <h2 className="text-blue-500 font-black uppercase tracking-[0.3em] mb-1 md:mb-4 text-[10px] md:text-sm [@media(max-height:700px)]:mb-1">
          Partnership
        </h2>
        <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl [@media(max-height:700px)]:text-2xl font-black text-white italic leading-tight uppercase">
          Invest in the <span className="text-blue-600">Future.</span>
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 [@media(max-height:700px)]:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 w-full max-w-6xl min-h-0 pt-2 pb-4">
        {tiers.map((tier, idx) => (
          <TierCard key={idx} tier={tier} idx={idx} onSelect={onSelect} />
        ))}
      </div>
    </div>
  );
}