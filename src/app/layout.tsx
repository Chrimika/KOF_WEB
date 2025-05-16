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
    <html lang="fr" style={{margin:0,padding:0,width:'100%'}}>
      <body className="flex flex-col min-h-screen" style={{margin:0,padding:0,width:'100%'}}>
        {children}
        <FooterLight />
      </body>
    </html>
  );
}
