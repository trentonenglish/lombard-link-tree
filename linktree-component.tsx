import React, { useState, useEffect } from 'react';
import { Instagram } from 'lucide-react';

// Define the keyframe animations as a string
const animationStyles = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const CraveCookiesLinks = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    // Create and append style element when component mounts
    const styleElement = document.createElement('style');
    styleElement.innerHTML = animationStyles;
    document.head.appendChild(styleElement);
    
    setMounted(true);
    
    // Clean up style element when component unmounts
    return () => {
      document.head.removeChild(styleElement);
      setMounted(false);
    };
  }, []);
  
  const links = [
    {
      id: 1,
      title: 'WIN FREE COOKIES FOR A YEAR',
      url: 'https://squareup.com/loyalty/MLH3KE8F7WW51',
      gradient: 'bg-white'
    },
    {
      id: 2,
      title: 'LEAVE US A REVIEW',
      url: 'https://g.co/kgs/TFF8R7k',
      gradient: 'bg-white'
    },
    {
      id: 3,
      title: 'ORDER ONLINE',
      url: 'https://order.cravecookies.com',
      gradient: 'bg-white'
    },
    {
      id: 4,
      title: 'CRAVE WEBSITE',
      url: 'https://cravecookies.com',
      gradient: 'bg-white'
    },
    {
      id: 5,
      title: 'GET THE CRAVE APP',
      url: 'https://qr.codes/DLYIWU',
      gradient: 'bg-white'
    }
  ];

  return (
    <div className={`flex justify-center items-center min-h-screen bg-gradient-to-b from-[#f5f5f7] to-white p-3 transition-opacity duration-500 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
      <div className="w-full max-w-md">
        {/* Clean, minimal card effect with subtle animation */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-lg border border-white/30 overflow-hidden transform transition-all duration-500 hover:shadow-xl">
          {/* Header with logo */}
          <div className="flex flex-col items-center pt-8 pb-6 px-8 relative">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#f8f8fa] to-white opacity-70"></div>
            
            {/* Logo image with animation */}
            <div className="relative w-24 h-24 mb-4 z-10 transform transition-transform duration-700 hover:scale-105">
              <div className="absolute -inset-3 bg-gradient-to-r from-[#e8e8ed] to-[#f5f5f7] rounded-full opacity-50 blur-md"></div>
              <div className="relative rounded-full overflow-hidden shadow-md p-1.5 bg-white">
                <img 
                  src="/images/logo.png" 
                  alt="Crave Cookies Logo" 
                  className="w-full h-full object-contain"
                  data-component-name="CraveCookiesLinks"
                />
              </div>
            </div>
            
            <h1 className="text-2xl font-semibold mb-0.5 text-[#1d1d1f] tracking-tight relative z-10">CRAVE COOKIES</h1>
            <p className="text-xs text-[#86868b] uppercase tracking-widest mb-2 font-light relative z-10">GRAND OPENING</p>
            <div className="px-4 py-1.5 bg-[#f5f5f7] rounded-full text-sm text-[#86868b] mb-1.5 font-medium tracking-wide shadow-sm relative z-10 border border-[#e6e6e6]/30">
              LOMBARD, IL
            </div>
            
            {/* Address with icon - clickable to open maps */}
            <a 
              href="https://maps.apple.com/?address=217+E+Roosevelt+Rd,+Lombard,+IL+60148&q=Crave+Cookies"
              className="flex items-center px-3 py-1 text-xs text-[#86868b] hover:text-[#edbd56] transition-colors duration-300 relative z-10"
              style={{ 
                animation: mounted ? 'fadeIn 0.8s ease forwards 0.5s' : 'none',
                opacity: 0
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1.5 text-[#edbd56]" data-component-name="CraveCookiesLinks">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span className="truncate" data-component-name="CraveCookiesLinks">217 E Roosevelt Rd, Lombard, IL 60148</span>
            </a>
          </div>
          
          {/* Links */}
          <div className="px-5 py-3 space-y-2.5">
            {links.map((link, index) => (
              <a
                key={link.id}
                href={link.url}
                className="group block"
                onMouseEnter={() => setHovered(link.id)}
                onMouseLeave={() => setHovered(null)}
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  animation: mounted ? 'fadeInUp 0.6s ease forwards' : 'none',
                  opacity: 0,
                  transform: 'translateY(10px)'
                }}
              >
                <div 
                  className={`flex items-center p-3 rounded-2xl transition-all duration-300 ${link.gradient} ${
                    hovered === link.id 
                      ? 'shadow-md translate-y-[-3px] bg-[#f8f8fa]' 
                      : 'shadow-sm border border-[#e6e6e6]/50'
                  }`}
                >
                  <div className="flex items-center justify-center w-9 h-9 bg-white rounded-full mr-3 overflow-hidden shadow-sm border border-[#f5f5f7] p-0.5">
                    <img 
                      src="/images/logo.png" 
                      alt="Crave Cookies Logo" 
                      className="w-5 h-5 object-contain"
                      data-component-name="CraveCookiesLinks"
                    />
                  </div>
                  <span className="font-medium flex-grow tracking-wide text-[#1d1d1f] text-sm">{link.title}</span>
                  <div className={`w-7 h-7 flex items-center justify-center rounded-full transition-all duration-300 transform ${
                    hovered === link.id ? 'translate-x-0 opacity-100 bg-[#edbd56]/10' : 'translate-x-2 opacity-0'
                  }`} data-component-name="CraveCookiesLinks">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#edbd56]" data-component-name="CraveCookiesLinks">
                      <path d="M5 12h14" data-component-name="CraveCookiesLinks"></path>
                      <path d="m12 5 7 7-7 7" data-component-name="CraveCookiesLinks"></path>
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
          
          {/* Social Media */}
          <div className="flex justify-center py-4">
            <a 
              href="https://www.instagram.com/thecravecookies/" 
              className="p-2.5 rounded-full bg-[#f5f5f7] hover:bg-[#e6e6e6] transition-all duration-300 shadow-sm border border-[#e6e6e6]/30 transform hover:scale-105"
              style={{ 
                animation: mounted ? 'fadeIn 0.8s ease forwards 0.6s' : 'none',
                opacity: 0
              }}
            >
              <Instagram size={20} className="text-[#edbd56]" />
            </a>
          </div>
          
          {/* Footer */}
          <div className="py-3 text-center text-[#86868b] text-xs font-light bg-gradient-to-t from-[#f8f8fa]/50 to-transparent"
            style={{ 
              animation: mounted ? 'fadeIn 0.8s ease forwards 0.7s' : 'none',
              opacity: 0
            }}
          >
            <div className="flex justify-center items-center">
              <p>&copy; CRAVE COOKIES 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CraveCookiesLinks;
