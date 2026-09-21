import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`sticky top-0 z-50 bg-gray-800 px-6 py-4 ${isOpen ? "rounded-b-2xl" : ""} md:rounded-b-none`}
    >
      <div className="flex items-center justify-between">
        <div className="ms-6 flex items-center text-2xl font-bold text-white">
          <img src="/favicon.png" alt="Bot Icon" className="me-1.5 w-10" />
          <a href="#">Verba</a>
        </div>

        <div className="me-20 hidden space-x-8 text-white md:flex">
          <a href="#" className="hover:text-gray-300">
            Home
          </a>
          <a href="#" className="hover:text-gray-300">
            Documentation
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white md:hidden"
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="mt-4 flex flex-col gap-4 text-white md:hidden">
          <a href="#" className="hover:text-gray-300">
            Home
          </a>

          <a href="#" className="hover:text-gray-300">
            Documentation
          </a>
        </div>
      )}
    </nav>
  );
}
