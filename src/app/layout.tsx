import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Impeesa AI",
  description: "Chatea con baden powell sobre cosas scout, recibi consejos, ideas y mucho mas!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${montserrat.variable} antialiased bg-slate-800 text-white`}
      >
        {children}
      </body>
    </html>
  );
}
