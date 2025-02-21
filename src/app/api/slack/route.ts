// src/app/api/slack/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { messages } from '@/data/messages';
import { isSpecialDate } from '@/utils/dateHelpers';

// Desabilita completamente o cache para esta rota
export const fetchCache = 'force-no-store';
export const revalidate = 0;
export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    // Adiciona um timestamp para garantir que a resposta seja única
    const timestamp = Date.now();
    
    const searchParams = request.nextUrl.searchParams;
    const tz = searchParams.get('tz') || 'UTC';
    
    const { isSpecial, specialMessage } = isSpecialDate();
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    const message = (isSpecial ? specialMessage : randomMessage)!;

    const colors = {
      positive: '#4ade80',
      negative: '#f87171',
      warning: '#fbbf24'
    };

    const footerIcons = {
      positive: '/dots-green.png',
      negative: '/dots-red.png',
      warning: '/dots-yellow.png'
    };

    const response = {
      response_type: 'in_channel',
      attachments: [
        {
          text: message!.text,
          color: colors[message.type as 'positive' | 'negative' | 'warning'],
          thumb_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/og?ts=${timestamp}`,
          footer_icon: `${process.env.NEXT_PUBLIC_BASE_URL}${footerIcons[message.type as 'positive' | 'negative' | 'warning']}`,
          footer: `Devo Codar Hoje? | ${tz}`
        }
      ]
    };

    // Headers para prevenir cache
    return NextResponse.json(response, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
        'Surrogate-Control': 'no-store',
        'Access-Control-Allow-Origin': '*'
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