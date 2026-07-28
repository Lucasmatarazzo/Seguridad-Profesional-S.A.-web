export interface Service {
  id: string;
  slug: string;
  name: string;
  description: string;
  icon: string;
  fullDescription: string;
  benefits: string[];
  process: string[];
  faqs: { question: string; answer: string }[];
  image?: string;
  heroImage?: string;
  gallery?: { url: string; caption: string }[];
}

export interface Device {
  id: string;
  name: string;
  description: string;
  specs: { label: string; value: string }[];
  features: string[];
  image?: string;
  thumbnails: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  image?: string;
  date: string;
  author: string;
  content: string;
  excerpt: string;
  relatedIds: string[];
  externalLink?: string;
}

export interface Client {
  id: string;
  name: string;
  logoType: 'text' | 'badge' | 'custom';
  imageUrl?: string;
}

export interface Branch {
  name: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  mapQuery: string;
  googleMapsUrl: string;
}
