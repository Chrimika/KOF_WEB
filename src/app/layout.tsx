// app/layout.tsx
import { FooterLight } from "./actualite/components/footer/KOFFooter";
import "./globals.css";

export const metadata = {
  title: "Site principal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="flex flex-col min-h-screen">
        {children}
        <FooterLight />
      </body>
    </html>
  );
}
