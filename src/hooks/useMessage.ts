// src/hooks/useMessage.ts
'use client';

import { useState, useEffect, useCallback } from 'react';
import { Message } from '@/types/message';
import { messages } from '@/data/messages';
import { isSpecialDate } from '@/utils/dateHelpers';

export const useMessage = () => {
  const [currentMessage, setCurrentMessage] = useState<Message | null>(null);
  const [messageHistory, setMessageHistory] = useState<number[]>([]);

  const generateNewMessage = useCallback(() => {
    const availableMessages = [...messages] as Message[];
    const { isSpecial, specialMessage } = isSpecialDate();
    
    if (isSpecial && specialMessage) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      availableMessages.push(specialMessage as any);
    }

    let newIndex: number;
    do {
      newIndex = Math.floor(Math.random() * availableMessages.length);
    } while (messageHistory.includes(newIndex) && messageHistory.length < availableMessages.length);

    if (messageHistory.length >= availableMessages.length) {
      setMessageHistory([newIndex]);
    } else {
      setMessageHistory(prev => [...prev, newIndex]);
    }

    const selectedMessage: Message = {
      text: availableMessages[newIndex].text,
      type: availableMessages[newIndex].type,
      emoji: availableMessages[newIndex].emoji,
      backgroundColor: availableMessages[newIndex].backgroundColor,
      textColor: availableMessages[newIndex].textColor,
      shareText: availableMessages[newIndex].shareText
    };

    setCurrentMessage(selectedMessage);
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