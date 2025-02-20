'use client';

import React from 'react';
import { Share2, Copy } from 'lucide-react';

interface ShareButtonProps {
  onClick: () => void;
  isNativeShare: boolean;
  isMounted?: boolean;
}

const ShareButton: React.FC<ShareButtonProps> = ({ onClick, isNativeShare, isMounted = false }) => {
  if (!isMounted) return null;

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      className="fixed bottom-6 right-6 p-3 rounded-full bg-white bg-opacity-20 
                 backdrop-blur-sm hover:bg-opacity-30 transition-all duration-300 
                 transform hover:scale-110 active:scale-95"
      aria-label="Compartilhar"
    >
      {isNativeShare ? (
        <Share2 className="w-6 h-6" />
      ) : (
        <Copy className="w-6 h-6" />
      )}
    </button>
  );
};

export default ShareButton;