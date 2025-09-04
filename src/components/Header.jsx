import React from 'react';

const Header = ({ onAdminClick, isAdminMode }) => {
  return (
    <header className="text-center py-20 px-4 relative overflow-hidden">
      {/* Admin Button - Top Right Corner */}
      <div className="absolute top-4 right-4 z-10">
        <button
          onClick={onAdminClick}
          className="group flex items-center space-x-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2 text-sm text-gray-300 hover:text-white transition-all duration-200"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="hidden sm:inline">{isAdminMode ? 'Exit Admin' : 'Admin'}</span>
        </button>
      </div>

      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-teal-600/10"></div>
      
      <div className="max-w-4xl mx-auto relative">        
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-gray-100 to-emerald-100 bg-clip-text text-transparent mb-6 tracking-tight">
          GitHub Timeline
        </h1>
        
        <div className="space-y-4">
          <p className="text-xl md:text-2xl text-gray-300 font-medium">
            Stay ahead of the development curve
          </p>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Get curated insights from GitHub's pulse - trending repositories, 
            breakthrough commits, and the innovations shaping tomorrow's code.
          </p>
        </div>
        
        {/* Professional stats or badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
            <span>Real-time updates</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
            <span>Curated content</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
            <span>Zero spam</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
