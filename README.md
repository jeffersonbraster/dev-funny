# 🤔 Devo Codar Hoje?

![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.0-38B2AC)
![License](https://img.shields.io/badge/license-MIT-green)

Um website divertido inspirado no "Should I Deploy Today" para ajudar desenvolvedores a decidirem se devem codar hoje, com mensagens bem-humoradas e Easter eggs!

[Demo](#) · [Reportar Bug](#) · [Sugerir Feature](#)

![Screenshot do Projeto](/screenshot.png)


## ✨ Funcionalidades

- 🎨 Design responsivo e minimalista
- 🔄 Mensagens dinâmicas e bem-humoradas
- 🎉 Easter eggs em datas especiais
- 🌗 Animações suaves e transições elegantes
- 📤 Compartilhamento nativo com fallback
- 📊 Analytics integrado
- ⌨️ Suporte completo a navegação por teclado

## 🚀 Tecnologias

- [Next.js 15](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Vercel Analytics](https://vercel.com/analytics)

## 📦 Instalação

1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/devo-codar-hoje.git
```

2. Instale as dependências
```bash
cd devo-codar-hoje
npm install
```

3. Execute o servidor de desenvolvimento
```bash
npm run dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador

## 🔧 Configuração

### Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=seu-id-aqui
```

### PWA

Os ícones do PWA estão localizados em `/public`. Para personalizar:

1. Substitua os arquivos:
   - `icon-192x192.png`
   - `icon-512x512.png`
2. Atualize o `manifest.ts` conforme necessário

## 📝 Personalização

### Adicionando Novas Mensagens

Edite o arquivo `src/data/messages.ts`:

```typescript
export const messages: Message[] = [
  {
    text: "Sua mensagem aqui!",
    type: "positive",
    emoji: "🚀",
    backgroundColor: "#4ade80",
    textColor: "#022c22"
  },
  // ...
];
```

### Easter Eggs

Configure datas especiais em `src/utils/dateHelpers.ts`:

```typescript
// Adicione suas datas especiais
if (month === 9 && date === 31) { // Halloween
  return {
    isSpecial: true,
    specialMessage: {
      // ...
    }
  };
}
```

3. Abra em um dispositivo móvel ou Chrome Desktop

## 📄 Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.