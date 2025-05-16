// app/miss-kof/layout.tsx
export const metadata = {
  title: "Miss KOF",
};

export default function MissKofLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
