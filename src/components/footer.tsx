// src/components/Footer.tsx
'use client';

import React from 'react';
import { Bot } from 'lucide-react';
import { PiTelegramLogoLight, PiGithubLogo } from "react-icons/pi";


const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 p-4">
      <div className="container mx-auto flex justify-center items-center gap-6 text-current">
        <a
          href="https://github.com/jeffersonbraster/dev-funny"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity"
        >
          <PiGithubLogo size={18} />
          <span className="text-sm">GitHub</span>
        </a>

        <span className="opacity-40">•</span>

        <a
          href="https://dev-funny.jeffersonbrandao.com.br/api/slack"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity"
        >
          <Bot size={18} />
          <span className="text-sm">Slack API</span>
        </a>

        <span className="opacity-40">•</span>

        <a
          href="https://dev-funny.jeffersonbrandao.com.br/api/telegram"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity"
        >
          <PiTelegramLogoLight size={18} />
          <span className="text-sm">Telegram API</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;