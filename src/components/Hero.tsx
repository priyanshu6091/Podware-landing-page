import React, { useState } from 'react';
import { Waves, Play, MessageCircle, Award } from 'lucide-react';
import { AuthModal } from './auth/AuthModal';

export function Hero() {
  const [authModal, setAuthModal] = useState<{ isOpen: boolean; type: 'user' | 'podcaster' }>({
    isOpen: false,
    type: 'user'
  });

  const openAuthModal = (type: 'user' | 'podcaster') => {
    setAuthModal({ isOpen: true, type });
  };

  const closeAuthModal = () => {
    setAuthModal({ ...authModal, isOpen: false });
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 text-white">
      <div className="absolute inset-0 opacity-20">
        <Waves className="w-full h-full" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 relative">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            Redefine Podcasting: Engage, Learn, and Earn with Podware
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 md:mb-12 text-gray-200 max-w-3xl mx-auto">
            Podware transforms passive listening into active engagement with real-time Q&A, 
            personalized reels, and rewards for sharing impactful moments.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <button 
              onClick={() => openAuthModal('user')}
              className="w-full sm:w-auto bg-white text-indigo-900 px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition"
            >
              Get Started
            </button>
            <button className="w-full sm:w-auto border-2 border-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-indigo-900 transition">
              Learn More
            </button>
            <button 
              onClick={() => openAuthModal('podcaster')}
              className="w-full sm:w-auto bg-purple-500 px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-purple-600 transition"
            >
              Join as a Podcaster
            </button>
          </div>
        </div>

        <div className="mt-16 md:mt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl">
            <div className="bg-purple-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Real-time Q&A</h3>
            <p className="text-gray-300">Engage directly with podcasters and participate in moderated discussions</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl">
            <div className="bg-purple-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Play className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">AI-Curated Reels</h3>
            <p className="text-gray-300">Experience personalized short-form content that keeps you engaged</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl sm:col-span-2 md:col-span-1">
            <div className="bg-purple-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Reward System</h3>
            <p className="text-gray-300">Earn rewards by sharing meaningful content and engaging with the community</p>
          </div>
        </div>
      </div>

      <AuthModal 
        isOpen={authModal.isOpen}
        onClose={closeAuthModal}
        type={authModal.type}
      />
    </div>
  );
}