import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // optional: install lucide-react icons
import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Resume", path: "/resume" },
    { name: "Skills", path: "/skills" },
    { name: "Timeline", path: "/timeline" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="bg-gray-800 text-white px-6 py-4 shadow-md fixed w-full top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-white">
          abhishek
        </Link>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`hover:text-blue-400 ${
                  pathname === item.path ? "text-blue-500 font-semibold" : ""
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block ml-4">
          <DarkModeToggle />
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 px-4 pb-4">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block hover:text-blue-400 ${
                    pathname === item.path ? "text-blue-500 font-semibold" : ""
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <DarkModeToggle />
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


