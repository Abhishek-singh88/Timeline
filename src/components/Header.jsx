
const Header = () => {
  return (
    <header className="text-center py-20 px-4 relative overflow-hidden">
      
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
