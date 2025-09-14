import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { subscribeEmail } from '../services/api';
import LoadingSpinner from './LoadingSpinner';
import SuccessMessage from './SuccessMessage';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast.error('Please enter your email address');
      return;
    }

    if (!validateEmail(email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setLoading(true);
    
    try {
      const response = await subscribeEmail(email);
      
      if (response.success) {
        setSubscribed(true);
        toast.success('Welcome aboard! Check your email for confirmation.');
        setEmail('');
      } else {
        toast.error(response.error || 'Subscription failed. Please try again.');
      }
    } catch (error) {
      console.error('Subscription error:', error);
      
      if (error.response?.status === 409) {
        toast.error('This email is already subscribed');
      } else if (error.response?.data?.error) {
        toast.error(error.response.data.error);
      } else {
        toast.error('Network error. Please check your connection.');
      }
    } finally {
      setLoading(false);
    }
  };

  if (subscribed) {
    return <SuccessMessage onSubscribeAnother={() => setSubscribed(false)} />;
  }

  return (
    <div className="max-w-xl mx-auto">
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-8 md:p-12">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join the Elite
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Subscribe to receive handpicked GitHub insights delivered to your inbox. 
            No noise, just signal.
          </p>
          <br></br>
           <p className="text-gray-300 text-lg leading-relaxed">
            NOTE : If you got Network error, then wait for 1 minutes and try again because backend is deployed on render so it takes upto 40 seconds to restart server.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-3">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-200 uppercase tracking-wider">
              Email
            </label>
            <div className="relative group">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.name@company.com"
                className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 outline-none text-white placeholder-gray-400 text-lg group-hover:border-white/30"
                disabled={loading}
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>
          
          <button 
            type="submit" 
            disabled={loading}
            className="cursor-pointer w-full bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 hover:from-emerald-500 hover:via-emerald-400 hover:to-teal-400 disabled:from-gray-600 disabled:to-gray-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center space-x-3 text-lg"
          >
            {loading ? (
              <>
                <LoadingSpinner />
                <span>Processing...</span>
              </>
            ) : (
              <>
                <span>Subscribe</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
                </svg>
              </>
            )}
          </button>
        </form>
        
        {/* Trust indicators */}
        <div className="mt-8 text-center">
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-400 mb-4">
            <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            <span>Enterprise-grade privacy protection</span>
          </div>
        </div>
        
        {/* Value proposition */}
        <div className="mt-10 bg-gradient-to-r from-emerald-950/30 to-teal-950/30 border border-emerald-800/30 rounded-2xl p-6">
          <h3 className="font-bold text-white mb-4 flex items-center">
            <svg className="w-5 h-5 text-emerald-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            Premium Benefits
          </h3>
          <div className="grid gap-3">
            {[
              'Curated repository discoveries',
              'Trending technology insights', 
              'Developer community highlights',
              'Strategic development patterns'
            ].map((benefit, index) => (
              <div key={index} className="flex items-center text-gray-300 text-sm">
                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-3 flex-shrink-0"></div>
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
