import { motion } from "framer-motion";

const data = [
  { num: "15+", title: "Years of Experience", desc: "Deep expertise across residential, commercial, and investment real estate in Hyderabad and beyond." },
  { num: "500+", title: "Clients Served", desc: "Trusted by hundreds of investors, homebuyers, and corporations to deliver premium real estate outcomes." },
  { num: "100+", title: "Projects Delivered", desc: "Successfully executed transactions across landmark residential developments and commercial properties." },
  { num: "2×", title: "Award Recognised", desc: "Recognised by industry bodies for outstanding contribution to real estate advisory and professional excellence." },
];

function Achievements() {
  return (
    <section id="achievements" className="py-24 px-[6%] bg-[#0A0A0B]">
      <div className="flex items-center gap-3 mb-5">
        <span className="w-6 h-px bg-[#C9A84C]" />
        <span className="text-[11px] tracking-[4px] uppercase text-[#C9A84C]">Achievements</span>
      </div>
      <h2 className="font-serif text-[clamp(36px,4vw,56px)] font-light leading-[1.15] mb-8">
        A Track Record of<br /><em className="text-[#C9A84C]">Excellence</em>
      </h2>
      <div className="w-14 h-px bg-[#8A6D2F] mb-14" />

      <div className="grid md:grid-cols-4 divide-x divide-[#222228] border border-[#222228]">
        {data.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="p-12 relative overflow-hidden group hover:bg-[#111114] transition-colors duration-300"
          >
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#C9A84C] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="font-serif text-[56px] font-light text-[#C9A84C] leading-none mb-3">{item.num}</div>
            <div className="text-[11px] tracking-[2px] uppercase text-[#9B9490] mb-4">{item.title}</div>
            <p className="text-[14px] text-[#6B6560] leading-[1.7] font-light">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;
