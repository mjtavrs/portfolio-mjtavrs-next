import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({
  weight: ["100", "300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Marcos Tavares",
  description: "Portfólio oficial de Marcos Tavares, desenvolvedor web Full Stack.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={workSans.className}>{children}</body>
    </html>
  );
}
