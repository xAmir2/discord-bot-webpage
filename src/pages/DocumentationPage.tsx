import { Navbar } from "../components/Navbar";
import { Documentation } from "../components/Documentation";
import { Footer } from "../components/Footer";
export function DocumentationPage() {
  return (
    <>
      <section className="min-h-screen w-full bg-gray-700 flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Documentation />
        </main>
        <Footer />
      </section>
    </>
  );
}
