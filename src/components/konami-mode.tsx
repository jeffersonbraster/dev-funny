'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import Logo from '@/app/icons/logo';

interface KonamiModeProps {
  isActive: boolean;
  onClose: () => void;
}

const secretMessages = [
  "🎮 Você desbloqueou o modo secreto!",
  "🚀 Level Up! Você é um dev sinistro!",
  "🎯 Conquista Desbloqueada: Konami Master",
];

const KonamiMode: React.FC<KonamiModeProps> = ({ isActive, onClose }) => {
  useEffect(() => {
    if (isActive) {
      // Confetti em várias cores
      const duration = 3 * 1000;
      const animationEnd = Date.now() + duration;

      const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'];

      (function frame() {
        const timeLeft = animationEnd - Date.now();

        confetti({
          particleCount: 2,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: colors
        });
        confetti({
          particleCount: 2,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: colors
        });

        if (timeLeft > 0) {
          requestAnimationFrame(frame);
        }
      }());
    }
  }, [isActive]);

  if (!isActive) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-gradient-to-br from-purple-600 to-blue-600 z-50
                 flex flex-col items-center justify-center overflow-hidden"
      onClick={onClose}
    >
      {/* Matrix-style background effect */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: -100 }}
            animate={{ 
              y: ["100%", "-100%"],
              transition: {
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
                delay: Math.random() * 2
              }
            }}
            className="absolute text-white text-2xl font-mono"
            style={{ left: `${i * 5}%` }}
          >
            {Array.from({ length: 15 }).map((_, j) => (
              <div key={j} className="my-4">
                {String.fromCharCode(Math.random() * 128)}
              </div>
            ))}
          </motion.div>
        ))}
      </div>

      {/* Central content */}
      <motion.div
        className="relative text-center text-white p-8 rounded-lg"
        initial={{ scale: 0.5, rotateY: 180 }}
        animate={{ scale: 1, rotateY: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="mb-8"
        >
          <Logo width={120} height={120} className="filter drop-shadow-glow" />
        </motion.div>

        {secretMessages.map((message, index) => (
          <motion.div
            key={message}
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{ delay: index * 0.2, type: "spring" }}
            className="text-2xl mb-4 font-bold"
          >
            {message}
          </motion.div>
        ))}

        <motion.button
          className="mt-8 px-6 py-3 bg-white text-purple-600 rounded-full 
                     font-bold hover:bg-opacity-90 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
        >
          Voltar à Realidade
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default KonamiMode;