// src/app/api/telegram/route.ts
import { NextResponse } from 'next/server';
import { messages } from '@/data/messages';
import { isSpecialDate } from '@/utils/dateHelpers';

export const dynamic = 'force-dynamic';
export const runtime = 'edge';

export async function GET() {
  try {
    // Obter mensagens disponíveis
    const availableMessages = [...messages];
    const { isSpecial, specialMessage } = isSpecialDate();
    
    if (isSpecial && specialMessage) {
      availableMessages.push(specialMessage);
    }

    // Selecionar mensagem aleatória
    const randomIndex = Math.floor(Math.random() * availableMessages.length);
    const message = availableMessages[randomIndex];

    // Criar emoji baseado no tipo da mensagem
    const statusEmoji = {
      positive: '✅',
      negative: '❌',
      warning: '⚠️'
    };

    // Formatar mensagem para o Telegram
    // O Telegram suporta HTML básico na mensagem
    const formattedMessage = `
<b>Devo Codar Hoje?</b> 🤔

${message.emoji} ${message.text}

${statusEmoji[message.type as 'positive' | 'negative' | 'warning']} <i>Status: ${message.type}</i>
    `.trim();

    // Retornar resposta formatada
    return NextResponse.json({
      text: formattedMessage,
      parse_mode: 'HTML'
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

