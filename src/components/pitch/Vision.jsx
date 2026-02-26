import React from 'react';

export default function Vision() {
  return (
    <div className="max-w-7xl w-full h-full min-h-0 grid grid-cols-[45%_55%] gap-4 lg:gap-12 items-center px-12 sm:px-16 md:px-8 py-2">
      
      {/* LEFT COLUMN: The Core Message */}
      <div className="text-left flex flex-col justify-center h-full min-h-0">
        <div>
          <h2 className="text-blue-500 font-black uppercase tracking-[0.3em] mb-1 lg:mb-4 text-[8px] md:text-sm">
            Our Vision
          </h2>
          
          <h3 className="text-xl sm:text-3xl md:text-5xl lg:text-7xl font-black text-white italic leading-[0.9] uppercase mb-2 lg:mb-10">
            Community Integrated.<br className="hidden sm:block" />
            <span className="text-blue-600">Professionally Driven.</span>
          </h3>
          
          <p className="text-[9px] sm:text-xs md:text-lg lg:text-xl text-blue-100/70 leading-relaxed font-bold italic border-l-2 md:border-l-4 border-blue-600 pl-2 md:pl-4 lg:pl-6 max-w-md">
            "Engineering a community hub where technical innovation scales with high-level competition."
          </p>
        </div>
      </div>

      {/* RIGHT COLUMN: The Pillars */}
      <div className="grid gap-2 lg:gap-10">
        
        <div className="group">
          <h4 className="text-white font-black uppercase tracking-widest text-[10px] sm:text-sm md:text-base lg:text-lg flex items-center">
            <span className="w-2 sm:w-4 lg:w-6 h-[2px] bg-blue-600 mr-2 sm:mr-3 lg:mr-4 transition-all group-hover:w-4 sm:group-hover:w-8 lg:group-hover:w-10"></span>
            The Collaborative Hub
          </h4>
          <p className="mt-0.5 sm:mt-1 lg:mt-2 text-blue-200/60 text-[8px] sm:text-[10px] md:text-xs lg:text-base leading-snug pl-4 sm:pl-7 lg:pl-10">
            We are building a platform where players, partners, and fans actively share in the growth and success of the organization.
          </p>
        </div>

        <div className="group">
          <h4 className="text-white font-black uppercase tracking-widest text-[10px] sm:text-sm md:text-base lg:text-lg flex items-center">
            <span className="w-2 sm:w-4 lg:w-6 h-[2px] bg-blue-600 mr-2 sm:mr-3 lg:mr-4 transition-all group-hover:w-4 sm:group-hover:w-8 lg:group-hover:w-10"></span>
            Tech-Forward Foundation
          </h4>
          <p className="mt-0.5 sm:mt-1 lg:mt-2 text-blue-200/60 text-[8px] sm:text-[10px] md:text-xs lg:text-base leading-snug pl-4 sm:pl-7 lg:pl-10">
            Integrating custom broadcast technology and transparent operations to elevate the local standard of the sport.
          </p>
        </div>

        <div className="group">
          <h4 className="text-white font-black uppercase tracking-widest text-[10px] sm:text-sm md:text-base lg:text-lg flex items-center">
            <span className="w-2 sm:w-4 lg:w-6 h-[2px] bg-blue-600 mr-2 sm:mr-3 lg:mr-4 transition-all group-hover:w-4 sm:group-hover:w-8 lg:group-hover:w-10"></span>
            Mutual Growth
          </h4>
          <p className="mt-0.5 sm:mt-1 lg:mt-2 text-blue-200/60 text-[8px] sm:text-[10px] md:text-xs lg:text-base leading-snug pl-4 sm:pl-7 lg:pl-10">
            High-level competition built to generate tangible returns for both our athletes and our foundational sponsors.
          </p>
        </div>

      </div>
    </div>
  );
}