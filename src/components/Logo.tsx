import React, { useState, useEffect } from "react";

interface LogoProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
  showText?: boolean;
  type?: 'header' | 'footer';
}

export default function Logo({ 
  className = "", 
  size = 'medium', 
  showText = true, 
  type = 'header' 
}: LogoProps) {
  const [logoUrl, setLogoUrl] = useState<string | null>(null);
  const storageKey = type === 'header' ? 'bem-me-care-header-logo' : 'bem-me-care-footer-logo';

  useEffect(() => {
    const savedLogo = localStorage.getItem(storageKey);
    setLogoUrl(savedLogo);

    // Listen for logo updates
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === storageKey) {
        setLogoUrl(e.newValue);
      }
    };

    // Listen for custom events for immediate updates
    const handleLogoUpdate = (e: CustomEvent) => {
      const eventType = type === 'header' ? 'headerLogoUpdated' : 'footerLogoUpdated';
      if (e.type === eventType) {
        setLogoUrl(e.detail);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('headerLogoUpdated', handleLogoUpdate as EventListener);
    window.addEventListener('footerLogoUpdated', handleLogoUpdate as EventListener);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('headerLogoUpdated', handleLogoUpdate as EventListener);
      window.removeEventListener('footerLogoUpdated', handleLogoUpdate as EventListener);
    };
  }, [storageKey, type]);

  const sizeClasses = {
    small: 'w-8 h-8',
    medium: type === 'footer' ? 'w-16 h-16' : 'w-10 h-10',
    large: 'w-20 h-20'
  };

  const textSizeClasses = {
    small: 'text-lg',
    medium: type === 'footer' ? 'text-2xl' : 'text-xl',
    large: 'text-3xl'
  };

  if (logoUrl) {
    return (
      <div className={`flex items-center ${className}`}>
        <img
          src={logoUrl}
          alt="Bem-Me-Care"
          className={`${sizeClasses[size]} object-contain mr-3`}
        />
        {showText && (
          <div>
            <h1 className={`${textSizeClasses[size]} font-bold ${type === 'footer' ? 'text-white' : 'text-gray-900'}`}>
              Bem-Me-Care
            </h1>
            <p className={`text-xs ${type === 'footer' ? 'text-gray-300' : 'text-gray-600'}`}>
              Apoio Domiciliário
            </p>
          </div>
        )}
      </div>
    );
  }

  // Fallback to default logo
  return (
    <div className={`flex items-center ${className}`}>
      <div 
        className={`${sizeClasses[size]} rounded-lg flex items-center justify-center mr-3`}
        style={{ backgroundColor: '#B39DDB' }}
      >
        <span className="text-white font-bold text-lg">B</span>
      </div>
      {showText && (
        <div>
          <h1 className={`${textSizeClasses[size]} font-bold ${type === 'footer' ? 'text-white' : 'text-gray-900'}`}>
            Bem-Me-Care
          </h1>
          <p className={`text-xs ${type === 'footer' ? 'text-gray-300' : 'text-gray-600'}`}>
            Apoio Domiciliário
          </p>
        </div>
      )}
    </div>
  );
}
