import { Message } from "postcss";

export const messages: Message[] = [
  {
    text: "CLARO! O café está quente e os bugs estão se escondendo!",
    type: "positive",
    emoji: "☕",
    backgroundColor: "#4ade80",
    textColor: "#022c22"
  },
  {
    text: "Melhor não... Seu git está querendo dar pull em produção!",
    type: "negative",
    emoji: "⚠️",
    backgroundColor: "#f87171",
    textColor: "#450a0a"
  },
  {
    text: "Com cautela! Seu console.log() ainda está em produção!",
    type: "warning",
    emoji: "👀",
    backgroundColor: "#fbbf24",
    textColor: "#452a0a"
  },
  {
    text: "VAI! Hoje o Stack Overflow está funcionando perfeitamente!",
    type: "positive",
    emoji: "🚀",
    backgroundColor: "#4ade80",
    textColor: "#022c22"
  },
  {
    text: "CUIDADO! Sexta-feira e querendo deployar?",
    type: "negative",
    emoji: "🔥",
    backgroundColor: "#f87171",
    textColor: "#450a0a"
  }
];