import React from 'react';

export default function Jersey() {
  return (
    <div className="w-full max-w-4xl mx-auto px-6 text-center">
      <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase italic">
        Jersey Real Estate
      </h2>
      <p className="mb-12 text-2xl text-blue-100/80">High-visibility placement on professional-grade competition gear.</p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-lg uppercase tracking-tighter font-black">
        <div className="bg-blue-600 text-white px-8 py-6 rounded border border-blue-400 shadow-md w-full md:w-auto">Lower Front (Elite)</div>
        <div className="bg-blue-900 text-white px-8 py-6 rounded border border-blue-700 w-full md:w-auto">Upper Back (Premier)</div>
        <div className="bg-slate-900 text-blue-300 px-8 py-6 rounded border border-slate-700 w-full md:w-auto">Sleeve (Support)</div>
      </div>
    </div>
  );
}