import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';
import SignupForm from './components/SignupForm';
import AdminDashboard from './components/AdminDashboard';
import Header from './components/Header';
import Footer from './components/Footer';

const PasswordModal = ({ isOpen, onClose, onSubmit }) => {
  const [password, setPassword] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(password);
    setPassword('');
  };

  const handleClose = () => {
    setPassword('');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 w-full max-w-md">
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl mb-3 shadow-lg">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 0h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Admin Access</h3>
          <p className="text-gray-300 text-sm">Enter password to access admin panel</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              className="w-full px-4 py-3 bg-white/5 border border-white/30 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 outline-none text-white placeholder-gray-400"
              autoFocus
              required
            />
          </div>
          
          <div className="flex space-x-3">
            <button
              type="button"
              onClick={handleClose}
              className="flex-1 px-4 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-gray-300 hover:text-white rounded-lg transition-all duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-3 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Access
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

function App() {
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  const handleAdminClick = () => {
    if (isAdminMode) {
    
      setIsAdminMode(false);
    } else {
  
      setShowPasswordModal(true);
    }
  };

  const handlePasswordSubmit = (enteredPassword) => {
    const correctPassword = import.meta.env.VITE_ADMIN_PASSWORD || '12345';
    
    if (enteredPassword === correctPassword) {
      setIsAdminMode(true);
      setShowPasswordModal(false);
      toast.success('✅ Admin access granted');
    } else {
      toast.error('❌ Incorrect password');
      setShowPasswordModal(false);
    }
  };

  const handleModalClose = () => {
    setShowPasswordModal(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <Header onAdminClick={handleAdminClick} isAdminMode={isAdminMode} />
      
      <main className="container mx-auto px-4 py-12">
        {isAdminMode ? <AdminDashboard /> : <SignupForm />}
      </main>
      
      <Footer />

   
      <PasswordModal 
        isOpen={showPasswordModal}
        onClose={handleModalClose}
        onSubmit={handlePasswordSubmit}
      />
      
      {/* Toast */}
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#1f2937',
            color: '#f9fafb',
            border: '1px solid #374151',
            borderRadius: '8px',
            fontSize: '14px',
          },
          success: {
            style: {
              background: '#065f46',
              border: '1px solid #10b981',
            },
          },
          error: {
            style: {
              background: '#7f1d1d',
              border: '1px solid #ef4444',
            },
          },
        }}
      />
    </div>
  );
}

export default App;
