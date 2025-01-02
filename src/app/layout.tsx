import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/header";


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
        className={`antialiased min-h-screen`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
