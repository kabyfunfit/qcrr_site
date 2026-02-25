import React from 'react';

export default function Vision() {
  return (
    <div className="max-w-7xl w-full grid md:grid-cols-[45%_55%] gap-12 items-center px-8">
      {/* LEFT COLUMN: The Core Message */}
      <div className="text-left">
        <h2 className="text-blue-500 font-black uppercase tracking-[0.3em] mb-4 text-xs md:text-sm">
          Our Vision
        </h2>
        
        <h3 className="text-4xl md:text-6xl lg:text-7xl font-black text-white italic leading-[0.9] uppercase mb-10">
          Community Integrated.<br className="hidden md:block" />
          <span className="text-blue-600">Professionally Driven.</span>
        </h3>
        
        <p className="text-lg md:text-xl text-blue-100/70 leading-relaxed font-bold italic border-l-4 border-blue-600 pl-6 max-w-md">
          "Engineering a community hub where technical innovation scales with high-level competition."
        </p>
      </div>

      {/* RIGHT COLUMN: The Pillars */}
      <div className="grid gap-6 md:gap-10">
        <div className="group">
          <h4 className="text-white font-black uppercase tracking-widest text-base md:text-lg flex items-center">
            <span className="w-6 h-[2px] bg-blue-600 mr-4 transition-all group-hover:w-10"></span>
            The Collaborative Hub
          </h4>
          <p className="mt-2 text-blue-200/60 text-sm md:text-base leading-snug pl-10 md:pl-14">
            We are building a platform where players, partners, and fans actively share in the growth and success of the organization.
          </p>
        </div>

        <div className="group">
          <h4 className="text-white font-black uppercase tracking-widest text-base md:text-lg flex items-center">
            <span className="w-6 h-[2px] bg-blue-600 mr-4 transition-all group-hover:w-10"></span>
            Tech-Forward Foundation
          </h4>
          <p className="mt-2 text-blue-200/60 text-sm md:text-base leading-snug pl-10 md:pl-14">
            Integrating custom broadcast technology and transparent operations to elevate the local standard of the sport.
          </p>
        </div>

        <div className="group">
          <h4 className="text-white font-black uppercase tracking-widest text-base md:text-lg flex items-center">
            <span className="w-6 h-[2px] bg-blue-600 mr-4 transition-all group-hover:w-10"></span>
            Mutual Growth
          </h4>
          <p className="mt-2 text-blue-200/60 text-sm md:text-base leading-snug pl-10 md:pl-14">
            High-level competition that benefits the whole ecosystem: professional pathways for our athletes and high-visibility platforms for our partners.
          </p>
        </div>
      </div>
    </div>
  );
}