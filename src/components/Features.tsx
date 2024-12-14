import React from 'react';
import { MessageSquare, Film, Gift, BarChart } from 'lucide-react';

export function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Everyone
          </h2>
          <p className="text-xl text-gray-600">
            Discover the tools that make Podware the ultimate podcasting platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-50 p-6 rounded-xl">
            <div className="bg-indigo-500 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Interactive Q&A</h3>
            <p className="text-gray-600">
              Engage with podcasters in real-time through our moderated Q&A system
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <div className="bg-purple-500 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Film className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">AI-Curated Reels</h3>
            <p className="text-gray-600">
              Experience bite-sized content tailored to your interests
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <div className="bg-pink-500 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Gift className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Rewards System</h3>
            <p className="text-gray-600">
              Earn rewards for sharing and engaging with great content
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <BarChart className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Creator Analytics</h3>
            <p className="text-gray-600">
              Comprehensive insights for podcasters to grow their audience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}