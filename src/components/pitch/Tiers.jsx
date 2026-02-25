import React from 'react';

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
    // 'h-full min-h-0' forces it to respect the screen height
    <div className="max-w-7xl w-full h-full min-h-0 flex flex-col items-center justify-center px-4 md:px-8 py-2">
      
      {/* HEADER SECTION */}
      <div className="text-center mb-4 md:mb-12 [@media(max-height:700px)]:mb-2">
        <h2 className="text-blue-500 font-black uppercase tracking-[0.3em] mb-1 md:mb-4 text-[10px] md:text-sm [@media(max-height:700px)]:mb-1">
          Partnership
        </h2>
        {/* Aggressive height-based text scaling */}
        <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl [@media(max-height:700px)]:text-2xl font-black text-white italic leading-tight uppercase">
          Invest in the <span className="text-blue-600">Future.</span>
        </h3>
      </div>

      {/* THREE COLUMN GRID */}
      {/* Strictly forces 3 horizontal columns on short landscape screens */}
      <div className="grid grid-cols-1 md:grid-cols-3 [@media(max-height:700px)]:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 w-full max-w-6xl min-h-0">
        {tiers.map((tier, idx) => (
          <div 
            key={idx}
            className={`relative flex flex-col p-3 lg:p-8 [@media(max-height:700px)]:p-3 rounded-2xl lg:rounded-3xl backdrop-blur-sm transition-all min-h-0
              ${tier.highlight 
                ? 'bg-blue-600/10 border-2 border-blue-500 shadow-[0_0_30px_rgba(37,99,235,0.15)] z-10 lg:scale-105 [@media(max-height:700px)]:scale-100' 
                : 'bg-blue-900/5 border border-blue-900/30 hover:border-blue-700'
              }`}
          >
            <h4 className="text-white font-black uppercase tracking-widest text-[11px] sm:text-sm lg:text-xl mb-0.5 lg:mb-1">{tier.title}</h4>
            <p className="text-blue-400 font-bold text-[8px] sm:text-[10px] lg:text-xs uppercase tracking-tighter mb-3 lg:mb-8 [@media(max-height:700px)]:mb-2 italic">{tier.tagline}</p>
            
            {/* Feature list compresses spacing heavily on short screens */}
            <ul className="space-y-1.5 lg:space-y-4 [@media(max-height:700px)]:space-y-1 mb-3 lg:mb-10 [@media(max-height:700px)]:mb-3 flex-grow overflow-y-auto no-scrollbar">
              {tier.features.map((feature, fIdx) => (
                <li key={fIdx} className="flex items-start text-[9px] sm:text-[11px] lg:text-base text-blue-100/60 leading-tight">
                  <span className="text-blue-500 mr-1.5 lg:mr-3 font-black">/</span>
                  {feature}
                </li>
              ))}
            </ul>

            {/* Buttons shrink so they stay visible at the bottom of the card */}
            <button 
              onClick={onSelect}
              className={`w-full py-2 lg:py-4 [@media(max-height:700px)]:py-1.5 rounded-lg lg:rounded-xl font-black uppercase tracking-widest transition-all text-[9px] sm:text-xs lg:text-sm shrink-0
              ${tier.highlight 
                ? 'bg-blue-600 text-white hover:bg-blue-500 shadow-[0_10px_20px_rgba(37,99,235,0.3)]' 
                : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
              }`}
            >
              Inquire
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}