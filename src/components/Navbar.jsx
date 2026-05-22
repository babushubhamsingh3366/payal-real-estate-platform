import { useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Leadership", href: "#leadership" },
  { label: "Achievements", href: "#achievements" },
  { label: "Veva Realty", href: "#veva" },
  { label: "Connect", href: "#contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-[5%] py-5 flex justify-between items-center transition-all duration-500 ${
        scrolled
          ? "bg-[#0A0A0B]/95 backdrop-blur-md border-b border-[#1A1A1F]"
          : "bg-gradient-to-b from-[#0A0A0B]/90 to-transparent"
      }`}
    >
      {/* Logo */}
      <a href="#home" className="font-serif text-[22px] font-light tracking-[3px] text-[#C9A84C] no-underline">
        P<span className="italic">K</span>D
      </a>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-8 list-none m-0 p-0">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-[11px] tracking-[2px] uppercase text-[#9B9490] no-underline hover:text-[#C9A84C] transition-colors duration-300"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-[#9B9490] flex flex-col gap-1.5 cursor-pointer bg-transparent border-none"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block h-px w-6 bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`block h-px w-6 bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
        <span className={`block h-px w-6 bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#111114] border-b border-[#1A1A1F] py-6 px-[5%]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-3 text-[12px] tracking-[2px] uppercase text-[#9B9490] no-underline hover:text-[#C9A84C] transition-colors duration-300 border-b border-[#1A1A1F] last:border-0"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
