import React from 'react';

const SuccessMessage = ({ onSubscribeAnother }) => {
  return (
    <div className="max-w-xl mx-auto">
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-8 md:p-12 text-center">
        
        
        <div className="mb-8">
          <div className="mx-auto w-24 h-24 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mb-6 shadow-2xl">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Welcome Aboard! 🚀
          </h2>
          
          <p className="text-gray-300 text-lg leading-relaxed">
            You've successfully joined our exclusive community of developers 
            who stay ahead of the curve.
          </p>
        </div>
        
        {/* Next steps */}
        <div className="bg-gradient-to-r from-emerald-950/30 to-teal-950/30 border border-emerald-800/30 rounded-2xl p-8 mb-8">
          <h3 className="font-bold text-white mb-6 text-xl">What happens next?</h3>
          
          <div className="space-y-4">
            {[
              { icon: '📧', text: 'Check your inbox for a welcome message' },
              { icon: '⚡', text: 'Premium insights delivered on-demand' },
              { icon: '🎯', text: 'Curated content tailored for professionals' }
            ].map((step, index) => (
              <div key={index} className="flex items-center text-gray-300">
                <span className="text-2xl mr-4">{step.icon}</span>
                <span className="text-left">{step.text}</span>
              </div>
            ))}
          </div>
        </div>
        
        
        <button 
          onClick={onSubscribeAnother}
          className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 hover:from-emerald-600/30 hover:to-teal-600/30 border border-emerald-500/30 text-emerald-300 font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105"
        >
          Subscribe Another Email
        </button>
      </div>
    </div>
  );
};

export default SuccessMessage;
