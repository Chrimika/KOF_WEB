import { LargeScreenTitle } from "../actualite/components/title";
import ActualitesContent from "./ActualiteContent";
import InvolveSection from "./InvolveSection";

export default function ActualitesPage() {
  return (
    <div className="flex flex-col">
      <main className="flex-grow">
        <LargeScreenTitle />
        <ActualitesContent />
        <InvolveSection />
      </main>
    </div>
  );
}
