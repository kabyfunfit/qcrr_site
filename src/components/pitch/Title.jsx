import React from 'react';

export default function Title() {
  return (
    <div className="text-center px-4 flex flex-col items-center pt-16 md:pt-32">
      {/* FIX: Added pr-8 (padding-right) and inline-block to the span. 
        This forces the bounding box to extend past the italic slant of the 'S'. 
      */}
      <div className="relative inline-block px-4">
        <h1 className="text-5xl md:text-9xl font-black text-white italic uppercase leading-[0.8] tracking-tighter">
          Queen Creek<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 drop-shadow-[0_10px_20px_rgba(37,99,235,0.2)] pr-4 md:pr-8 inline-block">
            Road Runners
          </span>
        </h1>
      </div>
      
      <div className="mt-12 h-1.5 w-32 bg-blue-600 shadow-[0_0_20px_#2563eb]"></div>
      
      <p className="mt-12 text-xl md:text-3xl text-blue-200/50 font-black uppercase tracking-[0.6em] pl-[0.6em]">
        2026 Season Partnership
      </p>
    </div>
  );
}