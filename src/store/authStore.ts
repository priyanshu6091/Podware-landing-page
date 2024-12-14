import { create } from 'zustand';
import { User, Podcaster } from '../types';

interface AuthState {
  user: User | null;
  podcaster: Podcaster | null;
  setUser: (user: User | null) => void;
  setPodcaster: (podcaster: Podcaster | null) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  podcaster: null,
  setUser: (user) => set({ user, podcaster: null }),
  setPodcaster: (podcaster) => set({ podcaster, user: null }),
  logout: () => set({ user: null, podcaster: null }),
}));