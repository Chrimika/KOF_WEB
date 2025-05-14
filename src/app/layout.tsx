import Header from "./header";
import './globals.css';
import Footer from "./actualites/Footer";
import { FooterLight } from "./actualite/components/footer/KOFFooter";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className="flex flex-col min-h-screen" style={{ padding: 0, margin: 0, display: 'flex', flexDirection: 'column' }}>
        <Header />
          {children}
          <FooterLight />
        <Footer />
      </body>
    </html>
  );
}