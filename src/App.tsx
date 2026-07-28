import React, { useState, Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ClientCarousel from './components/ClientCarousel';
import Services from './components/Services';

// Lazy loaded components for performance
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs'));
const KitBanner = lazy(() => import('./components/KitBanner'));
const DeviceCatalog = lazy(() => import('./components/DeviceCatalog'));
const AppCarousel = lazy(() => import('./components/AppCarousel'));
const MainFeatures = lazy(() => import('./components/MainFeatures'));
const Process = lazy(() => import('./components/Process'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Blog = lazy(() => import('./components/Blog'));
const ContactFormMap = lazy(() => import('./components/ContactFormMap'));
const CareersBanner = lazy(() => import('./components/CareersBanner'));
const Footer = lazy(() => import('./components/Footer'));

// Subpage details
const ServiceDetailPage = lazy(() => import('./components/ServiceDetailPage'));
const BlogDetailPage = lazy(() => import('./components/BlogDetailPage'));

const FallbackLoader = () => (
  <div className="flex items-center justify-center py-20">
    <div className="w-8 h-8 border-4 border-[#D4AF37] border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'service-detail' | 'blog-detail'>('home');
  const [selectedServiceSlug, setSelectedServiceSlug] = useState<string>('');
  const [selectedBlogId, setSelectedBlogId] = useState<string>('');

  const handleNavigate = (view: 'home' | 'service-detail' | 'blog-detail', id?: string) => {
    setCurrentView(view);
    if (view === 'service-detail' && id) {
      setSelectedServiceSlug(id);
    } else if (view === 'blog-detail' && id) {
      setSelectedBlogId(id);
    }
  };

  const handleBackFromService = (slug?: string) => {
    if (slug) {
      setSelectedServiceSlug(slug);
    }
    setCurrentView('home');
    setTimeout(() => {
      const element = document.getElementById('servicios');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const handleScrollToSection = (sectionId: string) => {
    if (currentView !== 'home') {
      setCurrentView('home');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 150);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div id="spsa-app" className="bg-[#0A0A0A] text-[#F5F5F5] min-h-screen flex flex-col justify-between overflow-x-hidden">
      {/* Global Navbar */}
      <Navbar onNavigate={handleNavigate} currentView={currentView} />

      {/* Dynamic Main Viewport switcher */}
      {currentView === 'home' && (
        <div className="flex-grow">
          {/* Hero Header */}
          <Hero onScrollToSection={handleScrollToSection} />

          {/* Client Logos Marquee */}
          <ClientCarousel />

          {/* Service Grid Section */}
          <Services 
            onSelectService={(slug) => handleNavigate('service-detail', slug)} 
            initialServiceSlug={selectedServiceSlug}
          />

          <Suspense fallback={<FallbackLoader />}>
            {/* Counter statistics and Why Choose Us */}
            <WhyChooseUs />

            {/* Promotion Kit & Mission Banner */}
            <KitBanner onScrollToSection={handleScrollToSection} />

            {/* Interactive Device Catalog */}
            <DeviceCatalog />

            {/* 3D Phone App Carousel */}
            <AppCarousel />

            {/* Value cards list */}
            <MainFeatures />

            {/* Sequential Work Process steps */}
            <Process />

            {/* Dynamic Golden Testimonial Slider */}
            <Testimonials />

            {/* Blog posts articles */}
            <Blog onSelectBlog={(id) => handleNavigate('blog-detail', id)} />

            {/* Contact form and red network map */}
            <ContactFormMap />
            {/* Careers Section */}
            <CareersBanner />
          </Suspense>
        </div>
      )}

      {currentView === 'service-detail' && (
        <Suspense fallback={<FallbackLoader />}>
          <ServiceDetailPage
            slug={selectedServiceSlug}
            onBack={handleBackFromService}
            onNavigate={handleNavigate}
          />
        </Suspense>
      )}

      {currentView === 'blog-detail' && (
        <Suspense fallback={<FallbackLoader />}>
          <BlogDetailPage
            id={selectedBlogId}
            onBack={() => handleNavigate('home')}
            onSelectBlog={(id) => handleNavigate('blog-detail', id)}
          />
        </Suspense>
      )}

      {/* Global Footer */}
      <Suspense fallback={<FallbackLoader />}>
        <Footer onScrollToSection={handleScrollToSection} onNavigate={handleNavigate} />
      </Suspense>
    </div>
  );
}
