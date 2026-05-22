// About.jsx
import { motion } from "framer-motion";

const cards = [
  { num: "15+", label: "Years of Industry Expertise" },
  { num: "₹500Cr+", label: "Portfolio Value Managed" },
  { num: "500+", label: "Satisfied Clients & Investors" },
];

export function About() {
  return (
    <section id="about" className="py-24 px-[6%] bg-[#111114]">
      <div className="flex items-center gap-3 mb-5">
        <span className="w-6 h-px bg-[#C9A84C]" />
        <span className="text-[11px] tracking-[4px] uppercase text-[#C9A84C]">About</span>
      </div>
      <h2 className="font-serif text-[clamp(36px,4vw,56px)] font-light leading-[1.15] mb-8">
        A Vision Forged<br />in <em className="text-[#C9A84C]">Purpose</em>
      </h2>
      <div className="w-14 h-px bg-[#8A6D2F] mb-14" />

      <div className="grid md:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-5"
        >
          {[
            <>Payal Kar Dutta is a <strong className="text-[#F5F0E8] font-normal">visionary entrepreneur and real estate strategist</strong> whose career has been defined by a relentless pursuit of excellence and a deep commitment to transforming how people invest in property.</>,
            <>As the <strong className="text-[#F5F0E8] font-normal">Founder & CEO of Veva Realty</strong>, Hyderabad's premier real estate advisory firm, she has built an organisation that stands at the intersection of trust, expertise, and innovation — serving clients across residential, commercial, and investment segments.</>,
            <>Her journey from a <strong className="text-[#F5F0E8] font-normal">passionate real estate professional</strong> to a recognised industry thought leader is marked by landmark deals, mentorship of emerging professionals, and a consistent ability to anticipate market trends.</>,
            <>Beyond transactions, Payal has positioned herself as a <strong className="text-[#F5F0E8] font-normal">mentor and industry voice</strong>, regularly engaging with media, industry forums, and professional networks to elevate the standards of real estate practice in India.</>,
          ].map((text, i) => (
            <p key={i} className="text-[16px] leading-[1.9] text-[#9B9490] font-light">{text}</p>
          ))}
        </motion.div>

        <div className="space-y-6">
          {cards.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-[#1A1A1F] border border-[#222228] p-8 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#C9A84C] to-transparent" />
              <span className="font-serif text-[40px] font-light text-[#C9A84C] block">{c.num}</span>
              <span className="text-[11px] tracking-[2px] uppercase text-[#6B6560]">{c.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
