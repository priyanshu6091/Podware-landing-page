import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';
import { authService, earlyAccessService } from '../../services/api';
import toast from 'react-hot-toast';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'user' | 'podcaster';
}

export function AuthModal({ isOpen, onClose, type }: AuthModalProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [podcastName, setPodcastName] = useState('');
  const [isEarlyAccess, setIsEarlyAccess] = useState(true);
  const { setUser, setPodcaster } = useAuthStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isEarlyAccess) {
        await earlyAccessService.request(email, type);
        toast.success('Early access request submitted successfully!');
        onClose();
        return;
      }

      if (type === 'user') {
        const user = await authService.registerUser(email, password);
        setUser(user);
      } else {
        const podcaster = await authService.registerPodcaster(email, password, podcastName);
        setPodcaster(podcaster);
      }
      toast.success('Registration successful!');
      onClose();
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>
        
        <h2 className="text-2xl font-bold mb-6">
          {isEarlyAccess ? 'Get Early Access' : type === 'user' ? 'Get Started with Podware' : 'Join as a Podcaster'}
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              placeholder="Enter your email"
              required
            />
          </div>
          
          {!isEarlyAccess && (
            <>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Create a password"
                  required
                />
              </div>
              
              {type === 'podcaster' && (
                <div>
                  <label htmlFor="podcastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Podcast Name
                  </label>
                  <input
                    type="text"
                    id="podcastName"
                    value={podcastName}
                    onChange={(e) => setPodcastName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Enter your podcast name"
                    required
                  />
                </div>
              )}
            </>
          )}
          
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition"
          >
            {isEarlyAccess ? 'Request Early Access' : type === 'user' ? 'Create Account' : 'Start Creating'}
          </button>
        </form>
        
        {!isEarlyAccess && (
          <div className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <button className="text-purple-600 hover:text-purple-700 font-medium">
              Sign In
            </button>
          </div>
        )}
        
        <div className="mt-4 text-center">
          <button
            onClick={() => setIsEarlyAccess(!isEarlyAccess)}
            className="text-sm text-purple-600 hover:text-purple-700"
          >
            {isEarlyAccess ? 'Have an access code?' : 'Request early access instead'}
          </button>
        </div>
      </div>
    </div>
  );
}