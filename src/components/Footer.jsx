
const Footer = () => {
  return (
    <footer className="text-center py-12 px-4 border-t border-white/10">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-gray-400">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span>Made for educational purpose</span>
          </div>
          
          <div className="hidden md:block w-px h-4 bg-gray-600"></div>
          
          <div className="flex items-center space-x-4 text-sm">
            <span>Built with React</span>
            <span>•</span>
            <span>Express API</span>
            <span>•</span>
            <span>Supabase</span>
          </div>
        </div>
        
        <p className="text-sm text-gray-500 mt-6">
          Connecting developers with tomorrow's innovations
        </p>
      </div>
    </footer>
  );
};

export default Footer;
