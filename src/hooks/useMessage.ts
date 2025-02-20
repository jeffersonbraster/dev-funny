'use client';

import { useState, useEffect, useCallback } from 'react';
import { Message } from '@/types/message';
import { messages } from '@/data/messages';

export const useMessage = () => {
  const [currentMessage, setCurrentMessage] = useState<Message | null>(null);
  const [messageHistory, setMessageHistory] = useState<number[]>([]);

  const generateNewMessage = useCallback(() => {
    let newIndex: number;
    do {
      newIndex = Math.floor(Math.random() * messages.length);
    } while (messageHistory.includes(newIndex) && messageHistory.length < messages.length);

    if (messageHistory.length >= messages.length) {
      setMessageHistory([newIndex]);
    } else {
      setMessageHistory(prev => [...prev, newIndex]);
    }

    // Corrigindo o problema de tipagem usando o índice para acessar a mensagem
    setCurrentMessage(() => messages[newIndex]);
  }, [messageHistory]);

  useEffect(() => {
    if (!currentMessage) {
      generateNewMessage();
    }
  }, [currentMessage, generateNewMessage]);

  return {
    message: currentMessage,
    generateNewMessage
  };
};