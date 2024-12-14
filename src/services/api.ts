import axios from 'axios';
import { User, Podcaster, EarlyAccessRequest } from '../types';

const api = axios.create({
  baseURL: 'https://podware-landing-page.onrender.com/api'
});

export const earlyAccessService = {
  request: async (email: string, type: 'user' | 'podcaster'): Promise<EarlyAccessRequest> => {
    const response = await api.post('/early-access/request', { email, type });
    return response.data;
  },

  checkStatus: async (email: string): Promise<EarlyAccessRequest> => {
    const response = await api.get('/early-access/status', { params: { email } });
    return response.data;
  }
};

export const authService = {
  registerUser: async (email: string, password: string): Promise<User> => {
    const response = await api.post('/auth/register/user', { email, password });
    return response.data;
  },

  registerPodcaster: async (email: string, password: string, podcastName: string): Promise<Podcaster> => {
    const response = await api.post('/auth/register/podcaster', { email, password, podcastName });
    return response.data;
  }
};
