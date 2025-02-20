"use client";

import { useEffect, useState } from "react";
import { useMessage } from "@/hooks/useMessage";
import { isSpecialDate } from "@/utils/dateHelpers";
import MessageDisplay from "@/components/message-display";
import { useKonamiCode } from "@/hooks/useKonamiCode";
import KonamiMode from "@/components/konami-mode";

export default function Home() {
  const { message, generateNewMessage } = useMessage();
  const {isKonamiCodeActive, resetCode} = useKonamiCode();
  const [showKonami, setShowKonami] = useState(false);

  useEffect(() => {
    if (isKonamiCodeActive) {
      setShowKonami(true);
    }
  }, [isKonamiCodeActive]);

  const handleCloseKonami = () => {
    setShowKonami(false);
    resetCode();
  };

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
      <MessageDisplay message={message} onRefresh={generateNewMessage} />

      <KonamiMode
        isActive={showKonami} 
        onClose={handleCloseKonami}
      />
    </>
  );
}
