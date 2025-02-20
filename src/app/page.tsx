'use client';

import { useEffect } from 'react';
import { useMessage } from '@/hooks/useMessage';
import { isSpecialDate } from '@/utils/dateHelpers';
import MessageDisplay from '@/components/message-display';

export default function Home() {
  const { message, generateNewMessage } = useMessage();

  // Verificar datas especiais
  useEffect(() => {
    const { isSpecial, specialMessage } = isSpecialDate();
    if (isSpecial && specialMessage && message?.text !== specialMessage.text) {
      generateNewMessage();
    }
  }, [message, generateNewMessage]);

  if (!message) return null;

  return (
    <>
      <MessageDisplay
        message={message} 
        onRefresh={generateNewMessage} 
      />
    </>
  );
}