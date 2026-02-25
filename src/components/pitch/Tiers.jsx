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
    <div className="max-w-7xl w-full flex flex-col items-center px-8">
      <div className="text-center mb-12">
        <h2 className="text-blue-500 font-black uppercase tracking-[0.3em] mb-4 text-xs md:text-sm">
          Partnership
        </h2>
        <h3 className="text-4xl md:text-6xl font-black text-white italic leading-tight uppercase">
          Founding <span className="text-blue-600">Opportunities</span>
        </h3>
      </div>

      <div className="grid md:grid-cols-3 gap-6 w-full">
        {tiers.map((tier, idx) => (
          <div 
            key={idx} 
            className={`p-8 rounded-3xl border transition-all duration-300 backdrop-blur-md flex flex-col
              ${tier.highlight 
                ? 'bg-blue-600/10 border-blue-500 shadow-[0_0_30px_rgba(37,99,235,0.15)] scale-105 z-10' 
                : 'bg-blue-900/5 border-blue-900/30 hover:border-blue-700'
              }`}
          >
            <h4 className="text-white font-black uppercase tracking-widest text-xl mb-1">{tier.title}</h4>
            <p className="text-blue-400 font-bold text-xs uppercase tracking-tighter mb-8 italic">{tier.tagline}</p>
            
            <ul className="space-y-4 mb-10 flex-grow">
              {tier.features.map((feature, fIdx) => (
                <li key={fIdx} className="flex items-start text-sm md:text-base text-blue-100/60 leading-tight">
                  <span className="text-blue-500 mr-3 font-black">/</span>
                  {feature}
                </li>
              ))}
            </ul>

            <button 
              onClick={onSelect}
              className={`w-full py-4 rounded-xl font-black uppercase tracking-widest transition-all
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
      
      <p className="mt-12 text-blue-100/30 text-[10px] md:text-xs uppercase tracking-[0.4em] font-black italic">
        * Custom Partnership Structures Available Upon Request
      </p>
    </div>
  );
}