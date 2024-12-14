import React from 'react';
import { Target, BookOpen } from 'lucide-react';

export function About() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Podware</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our mission is to create an engaging, educational, and rewarding podcasting ecosystem 
            for users and creators alike.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-indigo-100 p-3 rounded-lg">
                <Target className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                <p className="text-gray-600">
                  To revolutionize the podcasting landscape by creating meaningful connections 
                  between creators and listeners through interactive engagement.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <BookOpen className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Educational Impact</h3>
                <p className="text-gray-600">
                  We're transforming passive listening into active learning through AI-powered 
                  content curation and interactive features.
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80"
              alt="People recording podcast"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}