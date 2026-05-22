import { motion } from "framer-motion";

const milestones = [
  {
    phase: "Foundation",
    title: "Entering Real Estate",
    desc: "Began her career in the Hyderabad real estate market with a focus on residential advisory, quickly establishing a reputation for integrity and client-first service.",
    num: "01",
  },
  {
    phase: "Growth",
    title: "Building Veva Realty",
    desc: "Founded Veva Realty with a bold vision — to create a premium advisory platform that combined deep market knowledge with personalised investment guidance.",
    num: "02",
  },
  {
    phase: "Leadership",
    title: "Industry Recognition",
    desc: "Scaled Veva Realty into a trusted brand, launched VSpaces by Veva for curated commercial spaces, and emerged as a sought-after voice in real estate circles across India.",
    num: "03",
  },
];

function Journey() {
  return (
    <section id="journey" className="py-24 px-[6%] bg-[#0A0A0B]">
      <div className="flex items-center gap-3 mb-5">
        <span className="w-6 h-px bg-[#C9A84C]" />
        <span className="text-[11px] tracking-[4px] uppercase text-[#C9A84C]">The Journey</span>
      </div>
      <h2 className="font-serif text-[clamp(36px,4vw,56px)] font-light leading-[1.15] mb-8">
        Milestones That<br /><em className="text-[#C9A84C]">Defined</em> a Leader
      </h2>
      <div className="w-14 h-px bg-[#8A6D2F] mb-14" />

      <div className="grid md:grid-cols-3 divide-x divide-[#222228] border border-[#222228]">
        {milestones.map((m, i) => (
          <motion.div
            key={m.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="p-12 relative hover:bg-[#111114] transition-colors duration-300 group"
          >
            <span className="font-serif text-[48px] font-light text-[#222228] absolute top-5 right-6 leading-none group-hover:text-[#2A2A2F] transition-colors duration-300">
              {m.num}
            </span>
            <div className="text-[10px] tracking-[3px] uppercase text-[#C9A84C] mb-4">{m.phase}</div>
            <div className="font-serif text-[24px] font-light mb-4 leading-[1.3]">{m.title}</div>
            <p className="text-[14px] leading-[1.8] text-[#9B9490] font-light">{m.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Journey;
