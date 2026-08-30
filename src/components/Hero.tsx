import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import heroImage1 from "@/assets/WhatsApp Image 2026-08-26 at 10.38.04 (8).jpeg";
import heroImage2 from "@/assets/WhatsApp Image 2026-08-26 at 10.38.04 (4).jpeg";
import heroImage3 from "@/assets/WhatsApp Image 2026-08-26 at 10.38.04 (3).jpeg";
import aquabotLogo from "@/assets/WhatsApp Image 2026-08-26 at 10.38.05 (7).jpeg";

const Hero = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const logoHideTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isFirstSlideRender = useRef(true);

  // Hero slides data
  const heroSlides = [
    {
      title: "Transforming the way we think about",
      highlight: "water",
      subtitle: "AquaBot brings sustainable, smart water access to communities across Africa. Revolutionary technology meets community empowerment.",
      image: heroImage1
    },
    {
      title: "Smart technology for",
      highlight: "communities",
      subtitle: "Solar-powered water systems with IoT monitoring and predictive maintenance. Built to last, designed to empower.",
      image: heroImage2
    },
    {
      title: "Sustainable solutions for",
      highlight: "Africa",
      subtitle: "Partnering with local communities to create lasting change. Every AquaBot installation creates jobs and builds capacity.",
      image: heroImage3
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Trigger animations on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Slide the logo in, then back out a few seconds later
  const pulseLogo = () => {
    setShowLogo(true);
    if (logoHideTimeout.current) clearTimeout(logoHideTimeout.current);
    logoHideTimeout.current = setTimeout(() => setShowLogo(false), 4000);
  };

  // Show the logo a couple of minutes after the page opens
  useEffect(() => {
    const delayedReveal = setTimeout(() => pulseLogo(), 120000);
    return () => {
      clearTimeout(delayedReveal);
      if (logoHideTimeout.current) clearTimeout(logoHideTimeout.current);
    };
  }, []);

  // Show the logo again every time the carousel image changes
  useEffect(() => {
    if (isFirstSlideRender.current) {
      isFirstSlideRender.current = false;
      return;
    }
    pulseLogo();
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Carousel Background */}
      <div className="absolute inset-0 z-0">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={slide.image}
              alt={`AquaBot ${slide.highlight}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80" />
          </div>
        ))}
      </div>



      {/* Carousel Indicators */}
      {/*<div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>*/}

      {/* Sliding Logo Accent */}
      <div
        className={`fixed sm:absolute bottom-6 right-4 sm:right-6 z-30 pointer-events-none transition-all duration-700 ease-out ${
          showLogo ? 'translate-x-0 opacity-100' : 'translate-x-[150%] opacity-0'
        }`}
      >
        <img
          src={aquabotLogo}
          alt="AquaBot logo"
          className="w-28 sm:w-36 md:w-40 rounded-xl shadow-2xl ring-1 ring-white/40"
        />
      </div>

      {/* Flying Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Title with Fly-in Animation */}
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
          }`}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
              {heroSlides[currentSlide].title}{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent animate-pulse">
                {heroSlides[currentSlide].highlight}
              </span>
            </h1>
          </div>
          
          {/* Subtitle with Delayed Animation */}
          <div className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
          }`}>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto">
              {heroSlides[currentSlide].subtitle}
            </p>
          </div>
          
          {/* Buttons with Staggered Animation */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
          }`}>
            <button
              onClick={() => navigate('/about')}
              className="text-lg px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-lg shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300 border-0 cursor-pointer"
            >
              Discover AquaBot
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-lg px-8 py-4 bg-white/90 backdrop-blur-sm text-gray-900 font-semibold rounded-lg border-2 border-white hover:bg-white hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              Get Involved
            </button>
          </div>
        </div>
      </div>

      {/* Floating Particles Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;