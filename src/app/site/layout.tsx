// app/layout.tsx
import "../globals.css";
import Header from "./header";
import { FooterLight } from "../actualite/components/footer/KOFFooter";

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
      <body>
        <Header />
          {children}
        <FooterLight />
      </body>
    </html>
  );
}
