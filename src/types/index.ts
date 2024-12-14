export interface User {
  id: string;
  email: string;
  name?: string;
  createdAt: string;
}

export interface Podcaster {
  id: string;
  email: string;
  podcastName: string;
  createdAt: string;
}

export interface EarlyAccessRequest {
  email: string;
  type: 'user' | 'podcaster';
  status: 'pending' | 'approved';
}