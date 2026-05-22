import { motion } from "framer-motion";

const pillars = [
  { icon: "Vision", title: "Strategic Foresight", desc: "Anticipating market shifts and positioning clients ahead of the curve with data-driven insights." },
  { icon: "Integrity", title: "Ethical Practice", desc: "Building every relationship on transparency, honesty, and a fiduciary commitment to client outcomes." },
  { icon: "Innovation", title: "Market Innovation", desc: "Introducing new frameworks for property investment advisory that redefine client expectations." },
  { icon: "Mentorship", title: "Industry Building", desc: "Actively developing the next generation of real estate professionals through mentorship and knowledge sharing." },
];

function Leadership() {
  return (
    <section id="leadership" className="py-24 px-[6%] bg-[#111114]">
      <div className="flex items-center gap-3 mb-5">
        <span className="w-6 h-px bg-[#C9A84C]" />
        <span className="text-[11px] tracking-[4px] uppercase text-[#C9A84C]">Leadership</span>
      </div>
      <h2 className="font-serif text-[clamp(36px,4vw,56px)] font-light leading-[1.15] mb-8">
        Leading with<br /><em className="text-[#C9A84C]">Conviction</em>
      </h2>
      <div className="w-14 h-px bg-[#8A6D2F] mb-14" />

      <div className="grid md:grid-cols-2 gap-20 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <blockquote className="font-serif text-[clamp(22px,2.5vw,36px)] italic font-light leading-[1.6] text-[#F5F0E8] border-l-2 border-[#C9A84C] pl-9 mb-10">
            "Real estate is not just about property — it is about building futures, creating legacies, and empowering people to make the most transformative decisions of their lives."
          </blockquote>
          <p className="text-[15px] leading-[1.9] text-[#9B9490] font-light mb-4">
            Payal Kar Dutta's leadership philosophy centres on transparency, long-term thinking, and a genuine desire to create value — not just for clients, but for the broader industry ecosystem.
          </p>
          <p className="text-[15px] leading-[1.9] text-[#9B9490] font-light">
            As a mentor, she has guided emerging real estate professionals, sharing insights drawn from over a decade of navigating complex markets, regulatory shifts, and evolving client expectations.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-5">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-7 border border-[#222228] bg-[#1A1A1F] relative"
            >
              <div className="absolute top-0 left-0 w-0.5 h-full bg-[#C9A84C]" />
              <div className="text-[10px] tracking-[2px] uppercase text-[#C9A84C] mb-3">{p.icon}</div>
              <div className="font-serif text-[20px] font-light mb-2.5">{p.title}</div>
              <p className="text-[13px] text-[#6B6560] leading-[1.7] font-light">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Leadership;
