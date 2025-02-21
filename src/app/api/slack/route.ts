// src/app/api/slack/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { messages } from '@/data/messages';
import { isSpecialDate } from '@/utils/dateHelpers';

export async function GET(request: NextRequest) {
  try {
    // Pegar timezone do searchParams
    const searchParams = request.nextUrl.searchParams;
    const tz = searchParams.get('tz') || 'UTC';
    
    // Verificar se é uma data especial ou pegar mensagem aleatória
    const { isSpecial, specialMessage } = isSpecialDate();
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    const message = (isSpecial ? specialMessage : randomMessage)!;

    // Determinar a cor baseada no tipo da mensagem
    const colors = {
      positive: '#4ade80',
      negative: '#f87171',
      warning: '#fbbf24'
    };

    // Determinar o ícone baseado no tipo da mensagem
    const footerIcons = {
      positive: '/dots-green.png',
      negative: '/dots-red.png',
      warning: '/dots-yellow.png'
    };

    // Construir resposta no formato do Slack
    const response = {
      response_type: 'in_channel',
      attachments: [
        {
          text: message!.text,
          color: colors[message.type as 'positive' | 'negative' | 'warning'],
          thumb_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/og`,
          footer_icon: `${process.env.NEXT_PUBLIC_BASE_URL}${footerIcons[message.type as 'positive' | 'negative' | 'warning']}`,
          footer: `Devo Codar Hoje? | ${tz}`
        }
      ]
    };

    // Retornar resposta com headers corretos
    return NextResponse.json(response, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'no-store, no-cache, must-revalidate'
      }
    });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Configurar os métodos HTTP permitidos
export const dynamic = 'force-dynamic'; // Não faz cache da rota
export const runtime = 'edge'; // Opcional: usar Edge Runtime para melhor performance