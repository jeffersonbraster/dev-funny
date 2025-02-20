import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import { Rowdies } from "next/font/google";
import "./globals.css";

const rowdies = Rowdies({
  subsets: ['latin'],
  weight: ['300', '400', '700'], // Defina os pesos desejados
  variable: '--font-rowdies', // Nome para ser utilizado no CSS
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dev-funny.jeffersonbrandao.com.br/"),
  title: "DevFunny | Devo codar hoje?",
  description: "O que o destino reserva para você hoje meu caro dev?",
  authors: {
    name: "Jefferson Brandão",
    url: new URL("https://dev-funny.jeffersonbrandao.com.br/"),
  },
  openGraph: {
    type: "website",
    title: "DevFunny | Devo codar hoje?",
    description: "O que o destino reserva para você hoje meu caro dev?",
    url: new URL("https://dev-funny.jeffersonbrandao.com.br"),
    images: [
      {
        url: "https://dev-funny.jeffersonbrandao.com.br/devfunny-image.png",
        type: "image/jpeg",
        width: 1200,
        height: 630,
        alt: "DevFunny",
      }
    ]
  },
  robots: "/robots.txt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${rowdies.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
