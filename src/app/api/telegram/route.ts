// src/app/api/telegram/route.ts
import { NextResponse } from 'next/server';
import { messages } from '@/data/messages';
import { isSpecialDate } from '@/utils/dateHelpers';

export const dynamic = 'force-dynamic';
export const runtime = 'edge';

export async function GET() {
  try {
    const availableMessages = [...messages];
    const { isSpecial, specialMessage } = isSpecialDate();
    
    if (isSpecial && specialMessage) {
      availableMessages.push(specialMessage);
    }

    const randomIndex = Math.floor(Math.random() * availableMessages.length);
    const message = availableMessages[randomIndex];

    // Status mais limpo por tipo
    const statusStyle = {
      positive: '🟢',
      negative: '🔴',
      warning: '🟡'
    };

    // Formatação limpa usando Markdown V2
    const formattedMessage = `🤔 *Devo Codar Hoje?*

${message.emoji} ${message.text}

${statusStyle[message.type as 'positive' | 'negative' | 'warning']} _Status do dia_`;

    return NextResponse.json({
      text: formattedMessage,
      parse_mode: 'Markdown'
    }, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store, no-cache, must-revalidate',
      }
    });
  } catch (error) {
    console.error('Telegram API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}