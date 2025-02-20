'use client';

import { useState, useCallback, useEffect } from 'react';
import { Message } from '@/types/message';

export const useShare = (message: Message) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isShareSupported, setIsShareSupported] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setIsShareSupported(typeof navigator !== 'undefined' && !!navigator.share);
  }, []);

  const shareMessage = useCallback(async () => {
    if (!isMounted) return;

    const shareText = message.shareText || `Devo codar hoje? ${message.text} ${message.emoji} #DevLife`;
    
    if (isShareSupported) {
      try {
        await navigator.share({
          text: shareText,
          title: 'Devo Codar Hoje?',
          url: window.location.href
        });
      } catch (error) {
        if (error instanceof Error && error.name !== 'AbortError') {
          console.error('Error sharing:', error);
        }
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareText);
        // Opcional: Adicionar feedback visual de sucesso
      } catch (error) {
        console.error('Error copying to clipboard:', error);
      }
    }
  }, [message, isShareSupported, isMounted]);

  return { 
    isShareSupported: isMounted && isShareSupported,
    shareMessage,
    isMounted 
  };
};