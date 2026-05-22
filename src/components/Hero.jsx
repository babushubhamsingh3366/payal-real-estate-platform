import { motion } from "framer-motion";

const stats = [
  { num: "15+", label: "Years Experience" },
  { num: "500+", label: "Clients Served" },
  { num: "₹500Cr+", label: "Deals Closed" },
];

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen grid md:grid-cols-2 relative overflow-hidden"
    >
      {/* Left */}
      <div className="flex flex-col justify-center px-[6%] pt-32 pb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-[#C9A84C]" />
            <span className="text-[11px] tracking-[4px] uppercase text-[#C9A84C]">
              Founder & CEO, Veva Realty
            </span>
          </div>

          <h1 className="font-serif text-[clamp(52px,6vw,80px)] font-light leading-[1.05] mb-4 tracking-[-1px]">
            Payal
            <br />
            <em className="text-[#C9A84C]">Kar Dutta</em>
          </h1>

          <p className="text-[13px] tracking-[3px] uppercase text-[#9B9490] mb-10 leading-8">
            Real Estate Strategist &nbsp;·&nbsp; Entrepreneur &nbsp;·&nbsp; Industry Leader
          </p>

          <blockquote className="font-serif text-[22px] font-light italic text-[#9B9490] leading-[1.7] max-w-[440px] mb-14 border-l border-[#8A6D2F] pl-6">
            "Leading the future of real estate with vision, integrity, and unwavering excellence."
          </blockquote>

          <div className="flex gap-4 flex-wrap">
            <a
              href="#contact"
              className="px-9 py-4 bg-[#C9A84C] text-[#0A0A0B] text-[11px] tracking-[2.5px] uppercase font-medium no-underline hover:bg-[#E8D5A3] transition-colors duration-300"
            >
              Schedule Consultation
            </a>
            <a
              href="#about"
              className="px-9 py-[15px] border border-[#8A6D2F] text-[#C9A84C] text-[11px] tracking-[2.5px] uppercase font-medium no-underline hover:border-[#C9A84C] hover:bg-[#C9A84C]/10 transition-all duration-300"
            >
              Discover Her Story
            </a>
          </div>
        </motion.div>
      </div>

      {/* Right - Image */}
      <div className="relative overflow-hidden min-h-[400px]">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&q=80&fit=crop"
            alt="Payal Kar Dutta"
            className="w-full h-full object-cover opacity-70"
            style={{ filter: "grayscale(15%)" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(105deg, #0A0A0B 0%, transparent 45%)",
            }}
          />
        </motion.div>

        {/* Stats */}
        <div className="absolute bottom-12 right-[5%] flex gap-8 z-10">
          {stats.map((s) => (
            <div key={s.label} className="text-right">
              <span className="font-serif text-[36px] font-light text-[#C9A84C] block leading-none">
                {s.num}
              </span>
              <span className="text-[10px] tracking-[2px] uppercase text-[#6B6560] mt-1.5 block">
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(to right, transparent, #8A6D2F, transparent)",
          }}
        />
      </div>
    </section>
  );
}

export default Hero;
