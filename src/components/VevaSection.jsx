import { motion } from "framer-motion";

const services = [
  { num: "01", title: "Residential Advisory", desc: "Premium homes, luxury apartments, and investment-grade residential properties." },
  { num: "02", title: "Commercial Spaces", desc: "Offices, retail, and mixed-use properties for growing businesses." },
  { num: "03", title: "Investment Strategy", desc: "Portfolio planning and advisory for high-value property investment." },
  { num: "04", title: "NRI Services", desc: "Dedicated end-to-end support for NRI investors seeking Indian real estate." },
];

function VevaSection() {
  return (
    <section id="veva" className="py-24 px-[6%] bg-[#111114] relative overflow-hidden">
      {/* Background text */}
      <span
        className="absolute right-[-2%] top-1/2 -translate-y-1/2 font-serif text-[180px] font-light text-[#1A1A1F] leading-none pointer-events-none select-none tracking-[-8px]"
        aria-hidden="true"
      >
        VEVA
      </span>

      <div className="flex items-center gap-3 mb-5 relative z-10">
        <span className="w-6 h-px bg-[#C9A84C]" />
        <span className="text-[11px] tracking-[4px] uppercase text-[#C9A84C]">The Companies</span>
      </div>
      <h2 className="font-serif text-[clamp(36px,4vw,56px)] font-light leading-[1.15] mb-8 relative z-10">
        Veva Realty &<br /><em className="text-[#C9A84C]">VSpaces by Veva</em>
      </h2>
      <div className="w-14 h-px bg-[#8A6D2F] mb-14 relative z-10" />

      <div className="grid md:grid-cols-2 gap-20 items-start relative z-10">
        {/* Brand Blocks */}
        <div className="space-y-6">
          {[
            {
              name: "Veva Realty",
              sub: "Hyderabad · Residential & Commercial",
              desc: "Veva Realty is Payal's flagship venture — a premium real estate advisory firm built on deep market knowledge, personalised service, and long-term client partnerships. From first-time homebuyers to seasoned investors, Veva Realty crafts bespoke strategies for every client.",
              href: "https://vevarealty.com",
            },
            {
              name: "VSpaces",
              sub: "by Veva · Curated Commercial Spaces",
              desc: "VSpaces by Veva is the commercial real estate vertical, specialising in curated office spaces, co-working environments, and commercial investments for businesses seeking premium locations in Hyderabad's most sought-after corridors.",
              href: "https://vspacesbyveva.com",
            },
          ].map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="p-12 bg-[#0A0A0B] border border-[#222228]"
            >
              <div className="font-serif text-[48px] font-light text-[#C9A84C] tracking-[2px] mb-2">
                {brand.name}
              </div>
              <div className="text-[11px] tracking-[3px] uppercase text-[#6B6560] mb-6">{brand.sub}</div>
              <p className="text-[15px] leading-[1.9] text-[#9B9490] font-light mb-6">{brand.desc}</p>
              <a
                href={brand.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] tracking-[2px] uppercase text-[#C9A84C] no-underline hover:text-[#E8D5A3] transition-colors duration-300"
              >
                Visit Website →
              </a>
            </motion.div>
          ))}
        </div>

        {/* Services */}
        <div>
          <p className="text-[15px] leading-[1.9] text-[#9B9490] font-light mb-10">
            Together, Veva Realty and VSpaces by Veva form a comprehensive real estate ecosystem — one that serves every dimension of the modern property journey.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-6 border border-[#222228] bg-[#0A0A0B]/60"
              >
                <div className="text-[10px] tracking-[2px] uppercase text-[#C9A84C] mb-2.5">{s.num}</div>
                <div className="font-serif text-[18px] font-light mb-2">{s.title}</div>
                <p className="text-[13px] text-[#6B6560] leading-[1.7] font-light">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default VevaSection;
