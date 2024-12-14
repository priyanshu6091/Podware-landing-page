import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-indigo-900">Podware</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-indigo-900">About</a>
            <a href="#features" className="text-gray-700 hover:text-indigo-900">Features</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-indigo-900">How It Works</a>
            <button className="bg-indigo-900 text-white px-4 py-2 rounded-lg hover:bg-indigo-800">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-indigo-900"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a
              href="#about"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-indigo-900 hover:bg-gray-50"
            >
              About
            </a>
            <a
              href="#features"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-indigo-900 hover:bg-gray-50"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-indigo-900 hover:bg-gray-50"
            >
              How It Works
            </a>
            <button className="w-full text-left px-3 py-2 text-indigo-900 font-medium hover:bg-gray-50">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}