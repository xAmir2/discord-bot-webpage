import { Navbar } from "./Navbar";
import { MainContent } from "./MainContent";
import { Footer } from "./Footer";

export function Homepage() {
  return (
    <>
      <div className="h-screen w-full bg-gray-700">
        <Navbar />
        <MainContent />
        <Footer />
      </div>
    </>
  );
}
