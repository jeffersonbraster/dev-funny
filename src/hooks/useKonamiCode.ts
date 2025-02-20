'use client';

import { useState, useEffect, useCallback } from 'react';

const KONAMI_CODE = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a'
];

export const useKonamiCode = () => {
  const [input, setInput] = useState<string[]>([]);
  const [isKonamiCodeActive, setIsKonamiCodeActive] = useState(false);

  const resetCode = useCallback(() => {
    setInput([]);
    setIsKonamiCodeActive(false);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const newInput = [...input, e.key];
      
      // Mantém apenas os últimos 10 inputs (tamanho do Konami Code)
      if (newInput.length > KONAMI_CODE.length) {
        newInput.shift();
      }
      
      setInput(newInput);

      // Verifica se a sequência está correta
      const konamiString = KONAMI_CODE.join(',');
      const inputString = newInput.join(',');

      if (inputString === konamiString) {
        setIsKonamiCodeActive(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [input]);

  return {
    isKonamiCodeActive,
    resetCode
  };
};