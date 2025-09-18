import { useState, useEffect } from 'react';
import heroMobile from '@/assets/hero-mobile.webp';
import heroTablet from '@/assets/hero-tablet.webp';
import heroDesktop from '@/assets/hero-desktop.webp';

interface OptimizedHeroImageProps {
  onImageLoad: () => void;
  className?: string;
}

export const OptimizedHeroImage = ({ onImageLoad, className = '' }: OptimizedHeroImageProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    
    // Preload the appropriate image based on screen size
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    img.src = mediaQuery.matches ? heroMobile : heroDesktop;
    
    img.onload = () => {
      setImageLoaded(true);
      onImageLoad();
    };
  }, [onImageLoad]);

  if (!imageLoaded) {
    return (
      <div className={`${className} bg-gradient-to-br from-brand-yellow/20 via-brand-black/5 to-accent/10 animate-pulse`} />
    );
  }

  return (
    <picture className={className}>
      <source 
        media="(max-width: 768px)" 
        srcSet={heroMobile}
        type="image/webp"
      />
      <source 
        media="(max-width: 1200px)" 
        srcSet={heroTablet}
        type="image/webp"
      />
      <img
        src={heroDesktop}
        alt="AI Technology Background"
        className="absolute inset-0 w-full h-full object-cover animate-fade-in"
        fetchPriority="high"
        loading="eager"
        decoding="async"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
      />
    </picture>
  );
};