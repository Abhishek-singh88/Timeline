import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { triggerUpdate, getSubscriberCount, previewTimeline } from '../services/api';

const AdminDashboard = () => {
  const [loading, setLoading] = useState(false);
  const [subscriberCount, setSubscriberCount] = useState(null);
  const [lastTrigger, setLastTrigger] = useState(null);
  const [previewData, setPreviewData] = useState(null);
  const [showPreview, setShowPreview] = useState(false);

  useEffect(() => {
    fetchSubscriberCount();
  }, []);

  const fetchSubscriberCount = async () => {
    try {
      const response = await getSubscriberCount();
      setSubscriberCount(response.active_subscribers);
    } catch (error) {
      console.error('Failed to get subscriber count:', error);
    }
  };

  const handleTriggerUpdate = async () => {
    if (!window.confirm('Are you sure you want to send GitHub timeline updates to all subscribers?')) {
      return;
    }

    setLoading(true);
    try {
      const response = await triggerUpdate();
      if (response.success) {
        setLastTrigger({
          timestamp: new Date().toLocaleString(),
          sent: response.data.emails_sent,
          failed: response.data.emails_failed,
          events: response.data.events_count
        });
        toast.success(`✅ Success! Updates sent to ${response.data.emails_sent} subscribers`);
        await fetchSubscriberCount(); // Refresh count
      } else {
        toast.error('❌ Failed to send updates');
      }
    } catch (error) {
      console.error('Trigger error:', error);
      if (error.response?.data?.message) {
        toast.error(`❌ Error: ${error.response.data.message}`);
      } else {
        toast.error('❌ Failed to send updates. Check your connection.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handlePreviewTimeline = async () => {
    setLoading(true);
    try {
      const response = await previewTimeline();
      if (response.success) {
        setPreviewData(response);
        setShowPreview(true);
        toast.success(`📊 Preview loaded: ${response.events_count} events`);
      }
    } catch (error) {
      toast.error('❌ Failed to load preview');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Admin Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl mb-4 shadow-2xl">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-white mb-2">Admin Dashboard</h2>
        <p className="text-gray-300">Manage GitHub Timeline email campaigns</p>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Subscriber Stats */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Active Subscribers</h3>
            <button 
              onClick={fetchSubscriberCount}
              className="text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>
          </div>
          <div className="text-3xl font-bold text-emerald-400 mb-2">
            {subscriberCount !== null ? subscriberCount : '...'}
          </div>
          <p className="text-gray-400 text-sm">Total active email subscribers</p>
        </div>

        {/* Last Trigger Stats */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Last Campaign</h3>
          {lastTrigger ? (
            <div className="space-y-2">
              <div className="text-2xl font-bold text-blue-400">
                {lastTrigger.sent}/{lastTrigger.sent + lastTrigger.failed}
              </div>
              <p className="text-gray-400 text-sm">
                Sent: {lastTrigger.timestamp}
              </p>
              <p className="text-gray-400 text-xs">
                {lastTrigger.events} GitHub events included
              </p>
            </div>
          ) : (
            <p className="text-gray-400 text-sm">No campaigns sent yet</p>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {/* Main Trigger Button */}
        <button 
          onClick={handleTriggerUpdate}
          disabled={loading}
          className="col-span-full md:col-span-2 bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 hover:from-emerald-500 hover:via-emerald-400 hover:to-teal-400 disabled:from-gray-600 disabled:to-gray-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center space-x-3 text-lg shadow-xl"
        >
          {loading ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              <span>Sending Updates...</span>
            </>
          ) : (
            <>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              <span>Send GitHub Updates</span>
            </>
          )}
        </button>

        {/* Preview Button */}
        <button 
          onClick={handlePreviewTimeline}
          disabled={loading}
          className="bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 text-blue-300 font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          <span>Preview</span>
        </button>
      </div>

      {/* Warning Box */}
      <div className="bg-yellow-900/20 border border-yellow-600/30 rounded-xl p-4 mb-6">
        <div className="flex items-start space-x-3">
          <svg className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 18.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
          <div>
            <h4 className="text-yellow-400 font-semibold text-sm mb-1">Important Notice</h4>
            <p className="text-yellow-200/80 text-sm">
              This will send emails to all active subscribers immediately. Make sure the GitHub timeline has interesting content before sending.
            </p>
          </div>
        </div>
      </div>

      {/* Preview Modal */}
      {showPreview && previewData && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 border border-white/10 rounded-2xl max-w-2xl w-full max-h-96 overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">Timeline Preview</h3>
                <button 
                  onClick={() => setShowPreview(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <p className="text-gray-300 mb-4">
                {previewData.events_count} GitHub events ready to send
              </p>
              
              <div className="space-y-3 max-h-64 overflow-y-auto">
                {previewData.events.slice(0, 5).map((event, index) => (
                  <div key={event.id} className="bg-white/5 rounded-lg p-3">
                    <div className="flex items-center space-x-2 text-sm">
                      <span className="font-semibold text-emerald-400">{event.actor.login}</span>
                      <span className="text-gray-400">{event.action}</span>
                      <span className="text-blue-400">{event.repo.name}</span>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">{event.created_at}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
