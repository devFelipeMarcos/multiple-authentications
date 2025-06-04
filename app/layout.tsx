// app/layout.tsx
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seu App",
  description: "Descrição aqui",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
