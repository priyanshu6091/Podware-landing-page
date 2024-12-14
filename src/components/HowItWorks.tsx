import React from 'react';
import { Headphones, MessageCircle, Share2 } from 'lucide-react';

export function HowItWorks() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How Podware Works
          </h2>
          <p className="text-xl text-gray-600">
            Start your journey in three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="relative">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="bg-indigo-500 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Headphones className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Choose a Podcast</h3>
              <p className="text-gray-600">
                Browse our curated collection of podcasts and find content that interests you
              </p>
            </div>
            <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
              <div className="w-8 h-8 bg-indigo-500 rounded-full text-white flex items-center justify-center">
                →
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="bg-purple-500 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Engage & Learn</h3>
              <p className="text-gray-600">
                Participate in Q&A sessions and watch personalized reels
              </p>
            </div>
            <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
              <div className="w-8 h-8 bg-purple-500 rounded-full text-white flex items-center justify-center">
                →
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="bg-pink-500 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Share2 className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">3. Share & Earn</h3>
            <p className="text-gray-600">
              Share impactful moments and earn rewards for your contributions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}