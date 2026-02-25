import React from 'react';

export default function Title() {
  return (
    // 'h-full justify-center' ensures it naturally centers vertically without forced padding
    <div className="w-full h-full flex flex-col items-center justify-center text-center px-4 min-h-0">
      
      <div className="relative inline-block px-4">
        {/* Fluid text scaling from 4xl (mobile) up to 9xl (desktop) */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-black text-white italic uppercase leading-[0.85] tracking-tighter">
          Queen Creek<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 drop-shadow-[0_10px_20px_rgba(37,99,235,0.2)] pr-4 md:pr-8 inline-block">
            Road Runners
          </span>
        </h1>
      </div>
      
      {/* Dynamic margins: Tightens up automatically on landscape mobile */}
      <div className="mt-6 sm:mt-8 md:mt-12 landscape:mt-4 lg:landscape:mt-12 h-1 md:h-1.5 w-24 md:w-32 bg-blue-600 shadow-[0_0_20px_#2563eb]"></div>
      
      {/* Scales tracking and text size proportionally */}
      <p className="mt-6 sm:mt-8 md:mt-12 landscape:mt-4 lg:landscape:mt-12 text-sm sm:text-lg md:text-2xl lg:text-3xl text-blue-200/50 font-black uppercase tracking-[0.4em] md:tracking-[0.6em] pl-[0.4em] md:pl-[0.6em]">
        2026 Season Partnership
      </p>
      
    </div>
  );
}