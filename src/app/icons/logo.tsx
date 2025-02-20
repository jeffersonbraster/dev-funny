import React from 'react';

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ 
  width = 32, 
  height = 32, 
  className = '' 
}) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 512 512"
      width={width}
      height={height}
      className={className}
    >
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor:"#4ade80"}}/>
          <stop offset="100%" style={{stopColor:"#22c55e"}}/>
        </linearGradient>
        
        <linearGradient id="codeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{stopColor:"#022c22"}}/>
          <stop offset="100%" style={{stopColor:"#064e3b"}}/>
        </linearGradient>
      </defs>

      <circle cx="256" cy="256" r="248" fill="url(#bgGradient)" stroke="#064e3b" strokeWidth="16"/>

      <g transform="translate(256 256)">
        <g transform="translate(-140 -20)" fill="url(#codeGradient)">
          <rect x="-20" y="-60" width="80" height="16" rx="8"/>
          <rect x="-30" y="-20" width="100" height="16" rx="8"/>
          <rect x="-10" y="20" width="60" height="16" rx="8"/>
        </g>

        <path 
          d="M40 -80 C40 -120, -40 -120, -40 -80 C-40 -40, 0 -40, 0 0 L0 20 M0 60 L0 80"
          stroke="#022c22" 
          strokeWidth="40" 
          strokeLinecap="round"
          fill="none"
        />
      </g>

      <circle cx="160" cy="120" r="12" fill="#ffffff" opacity="0.3"/>
      <circle cx="180" cy="100" r="8" fill="#ffffff" opacity="0.2"/>
    </svg>
  );
};

export default Logo;