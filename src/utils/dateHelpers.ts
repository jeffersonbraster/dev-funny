import { Message } from "postcss";

export const isSpecialDate = (): { isSpecial: boolean; specialMessage?: Message } => {
  const today = new Date();
  const day = today.getDay();
  const date = today.getDate();
  const month = today.getMonth();

  // Sexta-feira 13
  if (day === 5 && date === 13) {
    return {
      isSpecial: true,
      specialMessage: {
        text: "É SEXTA-FEIRA 13! Nem pense em fazer deploy hoje! 😱",
        type: "negative",
        emoji: "👻",
        backgroundColor: "#881337",
        textColor: "#fecdd3",
        shareText: "Hoje é Sexta-feira 13 e eu NÃO vou codar! 👻 #DevLife"
      }
    };
  }

  // Natal
  if (month === 11 && date === 25) {
    return {
      isSpecial: true,
      specialMessage: {
        text: "É NATAL! Vá comemorar com a família! O código pode esperar! 🎄",
        type: "positive",
        emoji: "🎅",
        backgroundColor: "#166534",
        textColor: "#dcfce7",
        shareText: "Hoje é Natal e eu vou dar uma pausa no código! 🎄 #DevLife"
      }
    };
  }

  // Ano Novo
  if (month === 0 && date === 1) {
    return {
      isSpecial: true,
      specialMessage: {
        text: "ANO NOVO! Hora de começar aquele projeto que você sempre quis! 🎉",
        type: "positive",
        emoji: "🎆",
        backgroundColor: "#1e40af",
        textColor: "#dbeafe",
        shareText: "Novo ano, novos projetos! 🎉 #DevLife"
      }
    };
  }

   // Final do mês
   if (date >= 28) {
    return {
      isSpecial: true,
      specialMessage: {
        text: "FINAL DO MÊS! Hora de fechar aquelas 300 tasks atrasadas!",
        type: "warning",
        emoji: "⏰",
        backgroundColor: "#fbbf24",
        textColor: "#452a0a",
        shareText: "Final do mês, prazo apertado! ⏰ #DevLife"
      }
    };
  }

  // Segunda-feira
  if (day === 1) {
    return {
      isSpecial: true,
      specialMessage: {
        text: "É SEGUNDA! Café reforçado e commits organizados!",
        type: "positive",
        emoji: "☕",
        backgroundColor: "#4ade80",
        textColor: "#022c22",
        shareText: "Segunda-feira é dia de codar! ☕ #DevLife"
      }
    };
  }

  // Sexta-feira
  if (day === 5) {
    return {
      isSpecial: true,
      specialMessage: {
        text: "CUIDADO! Sexta-feira e querendo deployar?",
        type: "warning",
        emoji: "🔥",
        backgroundColor: "#fbbf24",
        textColor: "#452a0a",
        shareText: "É sexta-feira! Hoje não é dia de deploy! 🔥 #DevLife"
      }
    };
  }

  return { isSpecial: false };
};