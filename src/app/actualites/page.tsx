import ActualitesContent from "./ActualiteContent";
import Footer from "./Footer";
import Header from "./Header";
import InvolveSection from "./InvolveSection";

export default function ActualitesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <ActualitesContent />
        <InvolveSection />
      </main>
      <Footer />
    </div>
  );
}
