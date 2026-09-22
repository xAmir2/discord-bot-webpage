import { FaDiscord, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-gray-800 px-6 py-6 text-white">
      <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
        <div className="flex items-center">
          <p className="me-2">Created by</p>
          <FaDiscord className="me-1 text-xl" />
          <a href="#" className="hover:text-gray-300">
            xluciferous
          </a>
        </div>

        <div className="flex gap-6">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>

          <Link to="/documentation" className="hover:text-gray-300">
            Documentation
          </Link>

          <a
            href="https://github.com/xAmir2/discord-bot-translator"
            className="hover:text-gray-300"
          >
            <FaGithub className="text-xl" />
          </a>
        </div>

        <p className="text-sm text-gray-400">© 2026 Verba</p>
      </div>
    </footer>
  );
}
