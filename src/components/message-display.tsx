'use client';

import React, { useEffect } from 'react';
import { Message } from '@/types/message';
import { useShare } from '@/hooks/useShare';
import { motion, AnimatePresence } from 'framer-motion';
import ShareButton from './share-button';

interface MessageDisplayProps {
  message: Message;
  onRefresh: () => void;
}

const MessageDisplay: React.FC<MessageDisplayProps> = ({ message, onRefresh }) => {
  const { isShareSupported, shareMessage, isMounted } = useShare(message);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.code === 'Space' || event.code === 'Enter') {
        onRefresh();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [onRefresh]);

  return (
    <div 
      className="fixed inset-0 w-full min-h-screen transition-colors duration-500"
      style={{ 
        backgroundColor: message.backgroundColor,
        color: message.textColor 
      }}
    >
      <AnimatePresence mode="wait">
        <div 
          className="w-full min-h-screen flex flex-col items-center justify-center cursor-pointer"
          onClick={onRefresh}
        >
          <motion.div
            key={message.text}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="text-center px-4 max-w-4xl mx-auto"
          >
            {/* Título Principal */}
            <motion.h1
              className="text-2xl sm:text-3xl font-bold mb-4 opacity-80"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 0.8 }}
              transition={{ duration: 0.4 }}
            >
              Devo codar hoje?
            </motion.h1>

            {/* Emoji */}
            <div className="text-7xl sm:text-8xl mb-8 transition-transform duration-1000 ease-in-out hover:scale-110">
              <motion.div
                animate={{ 
                  y: [0, -10, 0] 
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {message.emoji}
              </motion.div>
            </div>
            
            {/* Mensagem Principal */}
            <motion.h2
              className="text-3xl sm:text-5xl md:text-6xl font-bold mb-12 leading-tight"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              {message.text}
            </motion.h2>

            {/* Instruções */}
            <motion.div
              className="text-lg sm:text-xl opacity-75"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              Pressione <kbd className="px-2 py-1 bg-black bg-opacity-10 rounded">espaço</kbd> ou{' '}
              <kbd className="px-2 py-1 bg-black bg-opacity-10 rounded">clique</kbd> para nova mensagem
            </motion.div>
          </motion.div>

          <ShareButton 
            onClick={shareMessage}
            isNativeShare={isShareSupported}
            isMounted={isMounted}
          />
        </div>
      </AnimatePresence>
    </div>
  );
};

export default MessageDisplay;