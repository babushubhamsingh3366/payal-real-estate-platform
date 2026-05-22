const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Leadership", href: "#leadership" },
  { label: "Achievements", href: "#achievements" },
  { label: "Veva Realty", href: "#veva" },
];

const companies = [
  { label: "Veva Realty", href: "https://vevarealty.com" },
  { label: "VSpaces by Veva", href: "https://vspacesbyveva.com" },
  { label: "Schedule Meeting", href: "#contact" },
  { label: "Professional Inquiry", href: "#contact" },
];

function Footer() {
  return (
    <footer className="bg-[#111114] border-t border-[#222228] px-[6%] pt-16 pb-10">
      <div className="grid md:grid-cols-3 gap-16 mb-16">
        <div>
          <div className="font-serif text-[32px] font-light text-[#C9A84C] tracking-[2px] mb-4">
            Payal Kar Dutta
          </div>
          <p className="text-[13px] text-[#6B6560] leading-[1.8] max-w-[280px] font-light">
            Founder & CEO, Veva Realty. Real Estate Strategist, Entrepreneur, and Industry Leader based in Hyderabad, India.
          </p>
        </div>

        <div>
          <div className="text-[10px] tracking-[3px] uppercase text-[#6B6560] mb-6">Quick Links</div>
          <ul className="space-y-3 list-none p-0 m-0">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-[14px] text-[#9B9490] no-underline hover:text-[#C9A84C] transition-colors duration-300 font-light"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-[10px] tracking-[3px] uppercase text-[#6B6560] mb-6">Companies</div>
          <ul className="space-y-3 list-none p-0 m-0">
            {companies.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="text-[14px] text-[#9B9490] no-underline hover:text-[#C9A84C] transition-colors duration-300 font-light"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pt-8 border-t border-[#222228] flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-[12px] text-[#6B6560]">
          © 2025 Payal Kar Dutta. All rights reserved.
        </div>
        <div className="flex gap-6">
          {["LinkedIn", "Instagram", "WhatsApp"].map((s) => (
            <a
              key={s}
              href="#"
              className="text-[11px] tracking-[2px] uppercase text-[#6B6560] no-underline hover:text-[#C9A84C] transition-colors duration-300"
            >
              {s}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
