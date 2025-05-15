// app/layout.tsx
import "../globals.css";
import Header from "../site/header";

export const metadata = {
  title: "Site galeries",
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
      </body>
    </html>
  );
}
