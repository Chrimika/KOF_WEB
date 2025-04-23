import type { Metadata } from "next";
import "./globals.css";
import { KOFHeader } from "./actualite/components/header/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <KOFHeader />
        {children}
      </body>
    </html>
  );
}
