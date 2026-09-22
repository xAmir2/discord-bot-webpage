import { Navbar } from "../components/Navbar";
import { MainContent } from "../components/MainContent";
import { Footer } from "../components/Footer";

export function Homepage() {
  return (
    <>
      <section className="min-h-screen w-full bg-gray-700 flex flex-col">
        <Navbar />
        <main className="flex-1">
          <MainContent />
        </main>
        <Footer />
      </section>
    </>
  );
}
