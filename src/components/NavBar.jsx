import { useState } from "react";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Intro", href: "#" },
    { label: "How To Buy", href: "#howtobuy" },
    { label: "Roadmap", href: "#roadmap" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <div className="navbar bg-base-100 border-b-3 border-base-300 sticky top-0 z-50">
      {/* Desktop links */}
      <div className="hidden md:flex flex-1 justify-center">
        <ul className="menu menu-horizontal gap-2 font-black md:text-xl lg:text-2xl">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile burger */}
      <div className="flex md:hidden flex-1 justify-end pr-2">
        <button
          className="btn btn-ghost text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-base-100 border-b-3 border-base-300 md:hidden z-50">
          <ul className="menu w-full font-black text-lg">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
